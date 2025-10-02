// app/registration/fitnessGoal.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useSignup } from "../context/SignupContext";

const FitnessGoalScreen = () => {
  const router = useRouter();
  const { signupData, updateData, resetData } = useSignup();
  const [selectedGoal, setSelectedGoal] = useState<string>(
    signupData.goal || ""
  );

  const goals = [
    "Strength Training for Muscle Gain",
    "High-Intensity Training for Fat Loss",
    "Cardiovascular Exercise for Fat Loss",
    "Functional Training for Overall Fitness",
    "Core Stability and Balance Development",
    "Workouts for Mental Wellness",
  ];

  const handleNext = async () => {
    if (!selectedGoal) {
      Alert.alert("Missing Goal", "Please select a fitness goal.");
      return;
    }

    // Update context with selected goal
    updateData({ goal: selectedGoal });

    const userData = { ...signupData, goal: selectedGoal };
    console.log("🚀 Sending signup data:", userData);

    try {
      const response = await fetch(
        "http://192.168.18.97:5000/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      console.log("📩 Server response:", data);

      if (response.ok) {
        resetData(); // clear signup context after successful registration
        router.replace("/registration/siginupComplete");
      } else {
        Alert.alert("Signup Failed", data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      Alert.alert(
        "Error",
        "Unable to connect to the server. Check your IP and backend."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>What's your primary fitness goal?</Text>
          <Text style={styles.subtitle}>
            Pick the one that suits your journey best
          </Text>
        </View>

        {/* Goal Options */}
        <View style={styles.optionsContainer}>
          {goals.map((goal, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedGoal === goal && styles.selectedOption,
              ]}
              onPress={() => setSelectedGoal(goal)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedGoal === goal && styles.selectedOptionText,
                ]}
              >
                {goal}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, !selectedGoal && styles.disabledButton]}
        disabled={!selectedGoal}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Finish Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContainer: { paddingHorizontal: 24, paddingBottom: 80 },
  header: { marginTop: 40, marginBottom: 32 },
  title: { fontSize: 24, fontWeight: "bold", color: "#111827", marginBottom: 12 },
  subtitle: { fontSize: 16, color: "#6B7280", lineHeight: 24 },
  optionsContainer: { marginTop: 16 },
  optionButton: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 20,
    marginBottom: 12,
    backgroundColor: "#F9FAFB",
  },
  selectedOption: { borderColor: "#2563EB", backgroundColor: "#EFF6FF" },
  optionText: { fontSize: 16, color: "#111827" },
  selectedOptionText: { color: "#2563EB", fontWeight: "600" },
  nextButton: {
    position: "absolute",
    bottom: 20,
    left: 24,
    right: 24,
    height: 56,
    backgroundColor: "#2563EB",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#E5E7EB" },
  nextButtonText: { fontSize: 16, fontWeight: "600", color: "#FFFFFF" },
});

export default FitnessGoalScreen;
