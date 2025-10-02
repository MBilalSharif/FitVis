// app/registration/heightSelection.tsx
import React, { useState, useRef, useCallback } from "react";
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

// Height ranges
const CM_VALUES = Array.from({ length: 121 }, (_, i) => i + 120); // 120cm to 240cm
const FEET_VALUES = Array.from({ length: 49 }, (_, i) => {
  const totalInches = i + 48; // 4ft (48in) to 8ft (96in)
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return { feet, inches, totalInches };
});

export default function HeightSelection() {
  const { signupData, updateData } = useSignup();
  const [selectedUnit, setSelectedUnit] = useState<"cm" | "ft">("cm");
  const [selectedHeight, setSelectedHeight] = useState<number>(
    signupData.height || 175
  ); // Default 175cm
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  // Convert cm ↔ feet/inches
  const cmToFeet = useCallback((cm: number) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return { feet, inches, totalInches };
  }, []);

  const feetToCm = useCallback((feet: number, inches: number) => {
    const totalInches = feet * 12 + inches;
    return Math.round(totalInches * 2.54);
  }, []);

  const handleContinue = () => {
    // ✅ Save height in context
    updateData({ height: selectedHeight });

    // ✅ Navigate forward
    router.push("/registration/weightSelection");
  };

  const handleUnitChange = (unit: "cm" | "ft") => {
    if (unit === selectedUnit) return;
    setSelectedUnit(unit);

    setTimeout(() => {
      if (unit === "ft") {
        const { feet, inches } = cmToFeet(selectedHeight);
        const feetIndex = FEET_VALUES.findIndex(
          (val) => val.feet === feet && val.inches === inches
        );
        if (feetIndex !== -1) {
          scrollViewRef.current?.scrollTo({ y: feetIndex * 60, animated: true });
        }
      } else {
        const cmIndex = CM_VALUES.indexOf(selectedHeight);
        if (cmIndex !== -1) {
          scrollViewRef.current?.scrollTo({ y: cmIndex * 60, animated: true });
        }
      }
    }, 100);
  };

  const handleScrollEnd = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / 60);

    if (selectedUnit === "cm") {
      const height =
        CM_VALUES[Math.max(0, Math.min(index, CM_VALUES.length - 1))];
      setSelectedHeight(height);
    } else {
      const heightData =
        FEET_VALUES[Math.max(0, Math.min(index, FEET_VALUES.length - 1))];
      const heightInCm = feetToCm(heightData.feet, heightData.inches);
      setSelectedHeight(heightInCm);
    }
  };

  const getDisplayHeight = () => {
    if (selectedUnit === "cm") return `${selectedHeight} cm`;
    const { feet, inches } = cmToFeet(selectedHeight);
    return `${feet}' ${inches}"`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>What's Your Height?</Text>
        <Text style={styles.subtitle}>How tall are you?</Text>
      </View>

      {/* Unit Selector */}
      <View style={styles.unitSelector}>
        <TouchableOpacity
          style={[styles.unitButton, selectedUnit === "ft" && styles.unitButtonSelected]}
          onPress={() => handleUnitChange("ft")}
        >
          <Text style={[styles.unitText, selectedUnit === "ft" && styles.unitTextSelected]}>
            Feet
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.unitButton, selectedUnit === "cm" && styles.unitButtonSelected]}
          onPress={() => handleUnitChange("cm")}
        >
          <Text style={[styles.unitText, selectedUnit === "cm" && styles.unitTextSelected]}>
            Centimeters
          </Text>
        </TouchableOpacity>
      </View>

      {/* Height Display */}
      <View style={styles.heightDisplay}>
        <Text style={styles.heightValue}>{getDisplayHeight()}</Text>
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
          {selectedUnit === "cm"
            ? CM_VALUES.map((height) => (
                <View key={height} style={styles.pickerItem}>
                  <Text
                    style={[
                      styles.pickerText,
                      selectedHeight === height && styles.pickerTextSelected,
                    ]}
                  >
                    {height}
                  </Text>
                </View>
              ))
            : FEET_VALUES.map(({ feet, inches }) => (
                <View key={`${feet}-${inches}`} style={styles.pickerItem}>
                  <Text
                    style={[
                      styles.pickerText,
                      cmToFeet(selectedHeight).feet === feet &&
                      cmToFeet(selectedHeight).inches === inches &&
                      styles.pickerTextSelected,
                    ]}
                  >
                    {feet}' {inches}"
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
  header: { alignItems: "center", marginTop: 60, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 8 },
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
  heightDisplay: { alignItems: "center", marginBottom: 50 },
  heightValue: { fontSize: 36, fontWeight: "bold", color: "#007AFF" },
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
