import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useSignup } from "../context/SignupContext"; // adjust import path

const SignUpScreen = () => {
  const router = useRouter();
  const { signupData, setSignupData } = useSignup();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Validation
    if (!firstName.trim()) {
      Alert.alert("Validation Error", "First name is required");
      return;
    }

    if (!lastName.trim()) {
      Alert.alert("Validation Error", "Last name is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      Alert.alert("Validation Error", "Email is required");
      return;
    } else if (!emailRegex.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address");
      return;
    }

    if (!password) {
      Alert.alert("Validation Error", "Password is required");
      return;
    } else if (password.length < 8) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 8 characters long"
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match");
      return;
    }

    // ✅ Save to context
    const name = `${firstName.trim()} ${lastName.trim()}`;
    setSignupData({ ...signupData, name, email, password });

    // ✅ Navigate to Role Selection
    router.push("/registration/roleSelection");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            // source={require('@/assets/images/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Get started by entering your personal information
        </Text>

        {/* First + Last Name */}
        <View style={styles.row}>
          <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.inputLabel}>First name</Text>
            <TextInput
              style={styles.input}
              value={formData.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
              placeholder="First name"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.inputLabel}>Last name</Text>
            <TextInput
              style={styles.input}
              value={formData.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
              placeholder="Last name"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholder="Enter email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
            placeholder="Enter password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
          />
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={formData.confirmPassword}
            onChangeText={(text) => handleInputChange("confirmPassword", text)}
            placeholder="Re-enter password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 24 },
  header: { paddingTop: 10, paddingBottom: 24 },
  backIcon: { marginLeft: 10, width: 34, height: 54 },
  content: { padding: 18 },
  title: { fontSize: 32, fontWeight: "bold", color: "#111827", marginBottom: 6 },
  subtitle: { fontSize: 16, color: "#6B7280", marginBottom: 24 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  inputContainer: { marginBottom: 16 },
  inputLabel: { fontSize: 14, fontWeight: "600", color: "#374151", marginBottom: 4 },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#111827",
    backgroundColor: "#F9FAFB",
  },
  signUpButton: {
    height: 56,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#2563EB",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  signUpButtonText: { fontSize: 16, fontWeight: "600", color: "#FFFFFF" },
});

export default SignUpScreen;
