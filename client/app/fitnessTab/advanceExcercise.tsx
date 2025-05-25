import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StrengthWorkoutScreen = () => {
  const exercises = [
    { 
      id: '1', 
      name: 'Chest Workout', 
      status: 'Completed', 
      frequency: '4x / week' 
    },
    { 
      id: '2', 
      name: 'Stronger Lower Body', 
      status: 'Incomplete', 
      frequency: '5x / week' 
    },
    { 
      id: '3', 
      name: 'Strength with Band', 
      status: 'Incomplete', 
      frequency: '2x / week' 
    },
    { 
      id: '4', 
      name: 'Total Body Training', 
      status: 'Incomplete', 
      frequency: '2x / week' 
    },
    { 
      id: '5', 
      name: 'Dash Strength', 
      status: 'Incomplete', 
      frequency: '2x / week' 
    },
    { 
      id: '6', 
      name: 'Endurance Focus', 
      status: 'Incomplete', 
      frequency: '3x / week' 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Strength Workout</Text>
          <Text style={styles.subtitle}>Complete Your Workout</Text>
          <Text style={styles.reminder}>Take more water to boost</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
          />
        </View>

        {/* Exercise Cards */}
        <View style={styles.exercisesContainer}>
          {exercises.map((exercise) => (
            <View 
              key={exercise.id} 
              style={[
                styles.exerciseCard,
                exercise.status === 'Completed' && styles.completedCard
              ]}
            >
              <View style={styles.exerciseContent}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <View style={styles.exerciseDetails}>
                  <Text 
                    style={[
                      styles.exerciseStatus,
                      exercise.status === 'Completed' 
                        ? styles.completedStatus 
                        : styles.incompleteStatus
                    ]}
                  >
                    {exercise.status}
                  </Text>
                  <Text style={styles.exerciseFrequency}>• {exercise.frequency}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>
                  {exercise.status === 'Completed' ? 'Redo' : 'Start'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 4,
  },
  reminder: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  exercisesContainer: {
    marginBottom: 20,
  },
  exerciseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  exerciseContent: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 6,
  },
  exerciseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseStatus: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 8,
  },
  completedStatus: {
    color: '#4CAF50',
  },
  incompleteStatus: {
    color: '#F44336',
  },
  exerciseFrequency: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  startButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  startButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default StrengthWorkoutScreen;