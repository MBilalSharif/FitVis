import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
// import Header from '../Component/header';
import { useRouter } from 'expo-router';  

const NutritionTracking = () => {
  const router = useRouter();

  // Example meal data (can later be fetched from API or DB)
  const meals = [
    {
      id: '1',
      title: 'Breakfast',
      calories: 350,
      protein: '20g',
      carbs: '30g',
      fats: '12g',
      screen: '/meal1',
    },
    {
      id: '2',
      title: 'Lunch',
      calories: 600,
      protein: '40g',
      carbs: '50g',
      fats: '20g',
      screen: '/meal2',
    },
    {
      id: '3',
      title: 'Dinner',
      calories: 550,
      protein: '35g',
      carbs: '45g',
      fats: '18g',
      screen: '/meal3',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      {/* <Header
        userName="John Doe"
        showBackButton={true}
        onBackPress={() => router.back()}
        disableProfile={true}
        showUserName={false}
      /> */}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Screen Title */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nutrition Tracking</Text>
        </View>

        {/* Calorie Summary */}
        <View style={styles.summaryContainer}>
          <View style={[styles.summaryCard, { backgroundColor: '#e3f2fd' }]}>
            <Text style={styles.summaryCardTitle}>Calorie Target</Text>
            <Text style={styles.summaryCardValue}>2,400</Text>
            <Text style={styles.summaryCardUnit}>kcal</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: '#e8f5e9' }]}>
            <Text style={styles.summaryCardTitle}>Calorie Taken</Text>
            <Text style={styles.summaryCardValue}>1,850</Text>
            <Text style={styles.summaryCardUnit}>kcal</Text>
          </View>
        </View>

        {/* Meal Plan Suggestions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>FitViz Meal Plan Suggestions</Text>

          {meals.map((meal) => (
            <View key={meal.id} style={styles.mealPlanCard}>
              <Text style={styles.mealPlanTitle}>Daily Meal: {meal.title}</Text>
              <View style={styles.mealPlanDetails}>
                <Text style={styles.mealPlanDetail}>Calories: {meal.calories}</Text>
                <Text style={styles.mealPlanDetail}>Protein: {meal.protein}</Text>
                <Text style={styles.mealPlanDetail}>Carbs: {meal.carbs}</Text>
                <Text style={styles.mealPlanDetail}>Fats: {meal.fats}</Text>
              </View>
              <TouchableOpacity
                style={styles.viewButton}
                // onPress={() => router.push(meal.screen)}
              >
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContainer: { padding: 16 },
  header: { marginBottom: 24 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#333' },

  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  summaryCard: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryCardTitle: { fontSize: 16, color: '#555', marginBottom: 8 },
  summaryCardValue: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  summaryCardUnit: { fontSize: 14, color: '#777' },

  sectionContainer: { marginBottom: 24 },
  sectionTitle: { fontSize: 20, fontWeight: '600', color: '#444', marginBottom: 16 },

  mealPlanCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mealPlanTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  mealPlanDetails: { marginBottom: 16 },
  mealPlanDetail: { fontSize: 14, color: '#666', marginBottom: 4 },

  viewButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  viewButtonText: { color: 'white', fontWeight: '600' },
});

export default NutritionTracking;
