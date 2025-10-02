import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSignup } from "../context/SignupContext"; // adjust path if needed

const RoleSelectionScreen = () => {
  const router = useRouter();
  const { signupData, setSignupData } = useSignup();
  const [selectedRole, setSelectedRole] = useState<string | null>(signupData.role || null);

  const handleContinue = () => {
    if (!selectedRole) return;

    // ✅ Save to context
    setSignupData({ ...signupData, role: selectedRole });

    // ✅ Move forward
    router.push("/registration/genderSelection");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Let’s get to know you better</Text>
        <Text style={styles.subtitle}>
          Choose your role to customize your experience
        </Text>

        <View style={styles.roleContainer}>
          {/* User Role */}
          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === "user" && styles.selectedRole,
            ]}
            onPress={() => setSelectedRole("user")}
          >
            <Text style={styles.roleText}>I’m a User</Text>
          </TouchableOpacity>

          {/* Trainer Role */}
          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === "trainer" && styles.selectedRole,
            ]}
            onPress={() => setSelectedRole("trainer")}
          >
            <Text style={styles.roleText}>I’m a Trainer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedRole && styles.disabledButton,
        ]}
        onPress={handleContinue}
        disabled={!selectedRole}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 24 },
  backButton: {
    marginTop: 16,
    marginBottom: 24,
    padding: 8,
    alignSelf: "flex-start",
  },
  backButtonText: { fontSize: 24, color: "#2563EB" },
  content: { flex: 1, justifyContent: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 48,
  },
  roleContainer: { marginBottom: 32 },
  roleButton: {
    height: 60,
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#9CA3AF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#F9FAFB",
  },
  selectedRole: { borderColor: "#2563EB", backgroundColor: "#EFF6FF" },
  roleText: { fontSize: 18, fontWeight: "600", color: "#111827" },
  continueButton: {
    height: 56,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#2563EB",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  disabledButton: { backgroundColor: "#E5E7EB" },
  continueButtonText: { fontSize: 16, fontWeight: "600", color: "#FFFFFF" },
});

export default RoleSelectionScreen;
