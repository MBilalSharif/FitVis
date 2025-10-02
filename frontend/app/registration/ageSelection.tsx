// app/registration/ageSelection.tsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useSignup } from "../context/SignupContext";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const AGES = Array.from({ length: 100 }, (_, i) => i + 1); // Ages 1–100

export default function AgeSelection() {
  const [selectedAge, setSelectedAge] = useState<number | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();
  const { updateData } = useSignup();

  const handleAgeSelect = (age: number) => {
    setSelectedAge(age);
  };

  const handleContinue = () => {
    if (selectedAge !== null) {
      // ✅ Save to context
      updateData({ age: selectedAge });

      // ✅ Navigate forward (no params needed)
      router.push("/registration/heightSelection");
    }
  };

  const centerAge = (age: number) => {
    const index = AGES.indexOf(age);
    const y = index * 60; // item height
    scrollViewRef.current?.scrollTo({ y, animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>How Old Are You?</Text>
        <Text style={styles.subtitle}>Share your age with us.</Text>
      </View>

      {/* Age Picker */}
      <View style={styles.pickerContainer}>
        <View style={styles.selectionIndicator} />

        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          snapToInterval={60}
          decelerationRate="fast"
          onMomentumScrollEnd={(event) => {
            const y = event.nativeEvent.contentOffset.y;
            const index = Math.round(y / 60);
            const age = AGES[Math.max(0, Math.min(index, AGES.length - 1))];
            setSelectedAge(age);
          }}
        >
          <View style={styles.spacer} />
          {AGES.map((age) => (
            <TouchableOpacity
              key={age}
              style={styles.ageItem}
              onPress={() => {
                handleAgeSelect(age);
                centerAge(age);
              }}
            >
              <Text
                style={[
                  styles.ageText,
                  selectedAge === age && styles.ageTextSelected,
                ]}
              >
                {age}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={styles.spacer} />
        </ScrollView>

        {/* Selected Age Display */}
        <View style={styles.selectedAgeContainer}>
          <Text style={styles.selectedAgeText}>
            {selectedAge ? `${selectedAge} years` : "Select your age"}
          </Text>
        </View>
      </View>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            selectedAge === null && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={selectedAge === null}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 24 },
  header: { alignItems: "center", marginTop: 60, marginBottom: 40 },
  title: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#666", textAlign: "center" },
  pickerContainer: { height: 300, marginHorizontal: 20, marginBottom: 40 },
  scrollView: { height: 300 },
  spacer: { height: 120 },
  ageItem: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  ageText: { fontSize: 20, color: "#999", fontWeight: "400" },
  ageTextSelected: { fontSize: 24, color: "#007AFF", fontWeight: "bold" },
  selectionIndicator: {
    position: "absolute",
    top: 120,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#007AFF",
    backgroundColor: "rgba(0, 122, 255, 0.05)",
    pointerEvents: "none",
  },
  selectedAgeContainer: {
    position: "absolute",
    top: 120,
    left: 0,
    right: 0,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  },
  selectedAgeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007AFF",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
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
