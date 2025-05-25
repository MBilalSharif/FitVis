import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const FitnessGoalScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    "Strength Training for Muscle Gain",
    "High-Intensity Training for Fat Loss",
    "Cardiovascular Exercise for Fat Loss",
    "Functional Training for Overall Fitness",
    "Core Stability and Balance Development",
    "Workouts for Mental Wellness"
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>What's your primary fitness goal?</Text>
          <Text style={styles.subtitle}>Pick the one that suits your journey best</Text>
        </View>

        {/* Goal Options */}
        <View style={styles.optionsContainer}>
          {goals.map((goal, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedGoal === goal && styles.selectedOption
              ]}
              onPress={() => setSelectedGoal(goal)}
            >
              <Text style={[
                styles.optionText,
                selectedGoal === goal && styles.selectedOptionText
              ]}>
                {goal}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Next Button */}
      <TouchableOpacity 
        style={[
          styles.nextButton,
          !selectedGoal && styles.disabledButton
        ]}
        disabled={!selectedGoal}
        onPress={() => {router.push('/dashboard/homeScreen');}}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 80,
  },
  header: {
    marginTop: 40,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  optionsContainer: {
    marginTop: 16,
  },
  optionButton: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    marginBottom: 12,
    backgroundColor: '#F9FAFB',
  },
  selectedOption: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  optionText: {
    fontSize: 16,
    color: '#111827',
  },
  selectedOptionText: {
    color: '#2563EB',
    fontWeight: '600',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    height: 56,
    backgroundColor: '#2563EB',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default FitnessGoalScreen;