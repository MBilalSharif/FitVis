import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
// Make sure to install expo-linear-gradient first: npx expo install expo-linear-gradient
import { LinearGradient } from 'expo-linear-gradient';

export default function TrainerScreen() {
  const handleStartWorkout = () => {
    // Logic to start the workout, navigate to a new screen, etc.
    console.log('Workout Started!');
    alert('Workout Started! (Check console for Expo Router navigation logic)');
  };

  return (
    <View style={styles.container}>
      {/* Set Screen Options for the header */}
      <Stack.Screen 
        options={{ 
          title: 'Your Personal Trainer',
          headerStyle: { backgroundColor: '#FF6F61' }, // Deep Coral
          headerTintColor: '#fff', 
        }} 
      />

      <LinearGradient
        // Deep blue to light blue gradient
        colors={['#1F2848', '#2D3E64']} 
        style={styles.gradientBackground}
      >
        <Text style={styles.greetingText}>
          Welcome back!
        </Text>
        <Text style={styles.promptText}>
          Ready to crush your next session? 💪
        </Text>

        {/* Workout Info Card Placeholder */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Today's Focus: Full Body HIIT</Text>
          <Text style={styles.cardDetail}>Duration: 30 min</Text>
          <Text style={styles.cardDetail}>Level: Intermediate</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleStartWorkout}
        >
          <Text style={styles.buttonText}>
            Start Workout Now
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

// ----------------------------------------------------------------------
// STYLESHEET
// ----------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F9C22E', // Gold/Yellow
    marginBottom: 10,
  },
  promptText: {
    fontSize: 18,
    color: '#E0E0E0',
    marginBottom: 40,
  },
  infoCard: {
    width: '90%',
    padding: 25,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 50,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  cardDetail: {
    fontSize: 16,
    color: '#B0B0B0',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#FF6F61', // Deep Coral for a pop
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});