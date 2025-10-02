// app/registration/genderSelection.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSignup } from "../context/SignupContext";

export default function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const router = useRouter();
  const { updateData } = useSignup();

  const handleContinue = () => {
    if (!selectedGender) return;

    // ✅ Save to context
    updateData({ gender: selectedGender });

    // ✅ Navigate forward (no need to pass params)
    router.push("/registration/ageSelection");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>What's your gender?</Text>
        <Text style={styles.subtitle}>Tell us about your gender!</Text>
      </View>

      {/* Gender Options */}
      <View style={styles.genderContainer}>
        {/* Male */}
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === "male" && styles.genderButtonSelected,
          ]}
          onPress={() => setSelectedGender("male")}
        >
          <Ionicons
            name="male"
            size={32}
            color={selectedGender === "male" ? "#fff" : "#666"}
          />
          <Text
            style={[
              styles.genderText,
              selectedGender === "male" && styles.genderTextSelected,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>

        {/* Female */}
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === "female" && styles.genderButtonSelected,
          ]}
          onPress={() => setSelectedGender("female")}
        >
          <Ionicons
            name="female"
            size={32}
            color={selectedGender === "female" ? "#fff" : "#666"}
          />
          <Text
            style={[
              styles.genderText,
              selectedGender === "female" && styles.genderTextSelected,
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedGender && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedGender}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 24 },
  header: { alignItems: "center", marginTop: 80, marginBottom: 60 },
  title: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#666", textAlign: "center" },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  genderButton: {
    flex: 1,
    height: 140,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    backgroundColor: "#f8f8f8",
  },
  genderButtonSelected: { borderColor: "#007AFF", backgroundColor: "#007AFF" },
  genderText: { fontSize: 16, fontWeight: "600", color: "#666", marginTop: 12 },
  genderTextSelected: { color: "#fff" },
  footer: { position: "absolute", bottom: 40, left: 24, right: 24 },
  continueButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  continueButtonDisabled: { backgroundColor: "#e0e0e0" },
  continueButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
