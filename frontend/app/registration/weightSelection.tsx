// app/registration/weightSelection.tsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useSignup } from "../context/SignupContext";

// Weight ranges
const KG_VALUES = Array.from({ length: 151 }, (_, i) => i + 30); // 30kg to 180kg
const LB_VALUES = Array.from({ length: 331 }, (_, i) => i + 66); // 66lbs to 396lbs

export default function WeightSelection() {
  const { signupData, updateData } = useSignup();
  const [selectedUnit, setSelectedUnit] = useState<"kg" | "lbs">("kg");
  const [selectedWeight, setSelectedWeight] = useState<number>(
    signupData.weight || 60
  );
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  // conversions
  const kgToLbs = (kg: number) => Math.round(kg * 2.20462);
  const lbsToKg = (lbs: number) => Math.round(lbs / 2.20462);

  const handleContinue = () => {
    // ✅ Save weight in context
    updateData({ weight: selectedWeight, weightUnit: selectedUnit });

    // ✅ Navigate to next screen
    router.push("/registration/excerciseFrequency");
  };

  const handleUnitChange = (unit: "kg" | "lbs") => {
    if (unit === selectedUnit) return;
    setSelectedUnit(unit);

    setTimeout(() => {
      if (unit === "lbs") {
        const lbsWeight = kgToLbs(selectedWeight);
        const lbsIndex = LB_VALUES.indexOf(lbsWeight);
        if (lbsIndex !== -1) {
          scrollViewRef.current?.scrollTo({ y: lbsIndex * 60, animated: true });
        }
      } else {
        const kgIndex = KG_VALUES.indexOf(selectedWeight);
        if (kgIndex !== -1) {
          scrollViewRef.current?.scrollTo({ y: kgIndex * 60, animated: true });
        }
      }
    }, 100);
  };

  const handleScrollEnd = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / 60);

    if (selectedUnit === "kg") {
      const weight =
        KG_VALUES[Math.max(0, Math.min(index, KG_VALUES.length - 1))];
      setSelectedWeight(weight);
    } else {
      const weight =
        LB_VALUES[Math.max(0, Math.min(index, LB_VALUES.length - 1))];
      setSelectedWeight(lbsToKg(weight));
    }
  };

  const getDisplayWeight = () =>
    selectedUnit === "kg" ? selectedWeight : kgToLbs(selectedWeight);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>What's Your Weight?</Text>
        <Text style={styles.subtitle}>How much do you weigh?</Text>
      </View>

      {/* Unit Selector */}
      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[styles.unitButton, selectedUnit === "lbs" && styles.unitButtonSelected]}
          onPress={() => handleUnitChange("lbs")}
        >
          <Text style={[styles.unitText, selectedUnit === "lbs" && styles.unitTextSelected]}>
            Lbs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.unitButton, selectedUnit === "kg" && styles.unitButtonSelected]}
          onPress={() => handleUnitChange("kg")}
        >
          <Text style={[styles.unitText, selectedUnit === "kg" && styles.unitTextSelected]}>
            Kg
          </Text>
        </TouchableOpacity>
      </View>

      {/* Weight Display */}
      <View style={styles.weightDisplay}>
        <Text style={styles.weightValue}>{getDisplayWeight()}</Text>
      </View>

      {/* Scrollable Picker */}
      <View style={styles.pickerContainer}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          snapToInterval={60}
          decelerationRate="fast"
          onMomentumScrollEnd={handleScrollEnd}
          onScrollEndDrag={handleScrollEnd}
        >
          <View style={styles.spacer} />
          {selectedUnit === "kg"
            ? KG_VALUES.map((weight) => (
                <View key={weight} style={styles.pickerItem}>
                  <Text
                    style={[
                      styles.pickerText,
                      selectedWeight === weight && styles.pickerTextSelected,
                    ]}
                  >
                    {weight}
                  </Text>
                </View>
              ))
            : LB_VALUES.map((weight) => (
                <View key={weight} style={styles.pickerItem}>
                  <Text
                    style={[
                      styles.pickerText,
                      kgToLbs(selectedWeight) === weight && styles.pickerTextSelected,
                    ]}
                  >
                    {weight}
                  </Text>
                </View>
              ))}
          <View style={styles.spacer} />
        </ScrollView>

        <View style={styles.selectionIndicator} />
      </View>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 24 },
  header: { alignItems: "center", marginTop: 60, marginBottom: 40 },
  title: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 8, textAlign: "center" },
  subtitle: { fontSize: 16, color: "#666", textAlign: "center" },
  unitSelector: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 4,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  unitButton: { flex: 1, paddingVertical: 12, alignItems: "center", borderRadius: 8 },
  unitButtonSelected: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  unitText: { fontSize: 16, fontWeight: "600", color: "#666" },
  unitTextSelected: { color: "#007AFF" },
  weightDisplay: { alignItems: "center", marginBottom: 50 },
  weightValue: { fontSize: 48, fontWeight: "bold", color: "#007AFF" },
  pickerContainer: { height: 300, marginHorizontal: 20, marginBottom: 40, position: "relative" },
  scrollView: { height: 300 },
  spacer: { height: 120 },
  pickerItem: { height: 60, justifyContent: "center", alignItems: "center" },
  pickerText: { fontSize: 20, color: "#999", fontWeight: "400" },
  pickerTextSelected: { fontSize: 24, color: "#007AFF", fontWeight: "bold" },
  selectionIndicator: {
    position: "absolute",
    top: 120,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#007AFF",
    backgroundColor: "rgba(0, 122, 255, 0.05)",
    pointerEvents: "none",
  },
  footer: { position: "absolute", bottom: 40, left: 24, right: 24 },
  continueButton: { backgroundColor: "#007AFF", paddingVertical: 16, borderRadius: 12, alignItems: "center" },
  continueButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
