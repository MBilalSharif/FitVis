// app/registration/exerciseFrequency.tsx
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
import { useSignup } from "../context/SignupContext";

type ExerciseOption = {
  id: string;
  title: string;
  subtitle: string;
};

const EXERCISE_OPTIONS: ExerciseOption[] = [
  { id: "daily", title: "Daily", subtitle: "1-2 Times a day" },
  { id: "weekly", title: "Weekly", subtitle: "1-2 Times a Week" },
  { id: "rarely", title: "Rarely", subtitle: "Want to kickstart my journey" },
];

export default function ExerciseFrequency() {
  const { signupData, updateData } = useSignup();
  const [selectedOption, setSelectedOption] = useState<string>(
    signupData.exerciseFrequency || ""
  );
  const router = useRouter();

  const handleContinue = () => {
    if (selectedOption) {
      updateData({ exerciseFrequency: selectedOption });
      router.push("/registration/goalSelection");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>How often do you exercise?</Text>
        <Text style={styles.subtitle}>Tell us about your exercise frequency!</Text>
      </View>

      {/* Exercise Options */}
      <View style={styles.optionsContainer}>
        {EXERCISE_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedOption === option.id && styles.optionButtonSelected,
            ]}
            onPress={() => setSelectedOption(option.id)}
          >
            <View style={styles.optionContent}>
              <Text
                style={[
                  styles.optionTitle,
                  selectedOption === option.id && styles.optionTitleSelected,
                ]}
              >
                {option.title}
              </Text>
              <Text
                style={[
                  styles.optionSubtitle,
                  selectedOption === option.id && styles.optionSubtitleSelected,
                ]}
              >
                {option.subtitle}
              </Text>
            </View>

            {/* Radio Button */}
            <View
              style={[
                styles.radioOuter,
                selectedOption === option.id && styles.radioOuterSelected,
              ]}
            >
              {selectedOption === option.id && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedOption && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedOption}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 24 },
  header: { alignItems: "center", marginTop: 60, marginBottom: 50 },
  title: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 8, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#666", textAlign: "center", lineHeight: 22 },
  optionsContainer: { marginHorizontal: 20, marginBottom: 40 },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionButtonSelected: { backgroundColor: "rgba(0, 122, 255, 0.05)", borderColor: "#007AFF" },
  optionContent: { flex: 1 },
  optionTitle: { fontSize: 18, fontWeight: "bold", color: "#000", marginBottom: 4 },
  optionTitleSelected: { color: "#007AFF" },
  optionSubtitle: { fontSize: 14, color: "#666", lineHeight: 18 },
  optionSubtitleSelected: { color: "#007AFF" },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  radioOuterSelected: { borderColor: "#007AFF" },
  radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: "#007AFF" },
  footer: { position: "absolute", bottom: 40, left: 24, right: 24 },
  continueButton: { backgroundColor: "#007AFF", paddingVertical: 16, borderRadius: 12, alignItems: "center" },
  continueButtonDisabled: { backgroundColor: "#e0e0e0", shadowOpacity: 0, elevation: 0 },
  continueButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
