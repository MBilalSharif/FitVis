

// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
// import Header from '../Component/header';
// import { useRouter } from 'expo-router';  

// const NutritionTracking = () => {
//   const router = useRouter();

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header 
//         userName="John Doe"
//         onProfilePress={() => console.log("")}
//         onNotificationPress={() => console.log('Notification pressed')}
//         onMenuPress={() => console.log('Menu pressed')} 
//       />
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Nutrition Tracking</Text>
//         </View>

//         {/* FitViz Meal Plan Suggestions Section */}
//         <View style={styles.sectionContainer}>
//           <Text style={styles.sectionTitle}>FitVis Meal Plan Suggestions</Text>
          
//           {/* Meal Plan Cards */}
//           <View style={styles.mealPlanCard}>
//             <Text style={styles.mealPlanTitle}>Daily Meal Prep 1</Text>
//             <View style={styles.mealPlanDetails}>
//               <Text style={styles.mealPlanDetail}>Calories: 500</Text>
//               <Text style={styles.mealPlanDetail}>Protein: 30g</Text>
//               <Text style={styles.mealPlanDetail}>Carbs: 45g</Text>
//               <Text style={styles.mealPlanDetail}>Fats: 15g</Text>
//             </View>
//             <TouchableOpacity style={styles.viewButton}>
//               <Text style={styles.viewButtonText}>View Details</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Additional meal plan cards can be added here */}
//           <View style={[styles.mealPlanCard, {marginTop: 15}]}>
//             <Text style={styles.mealPlanTitle}>Daily Meal Prep 2</Text>
//             <View style={styles.mealPlanDetails}>
//               <Text style={styles.mealPlanDetail}>Calories: 600</Text>
//               <Text style={styles.mealPlanDetail}>Protein: 40g</Text>
//               <Text style={styles.mealPlanDetail}>Carbs: 50g</Text>
//               <Text style={styles.mealPlanDetail}>Fats: 20g</Text>
//             </View>
//             <TouchableOpacity style={styles.viewButton}>
//               <Text style={styles.viewButtonText}>View Details</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Additional sections can be added here */}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollContainer: {
//     padding: 16,
//   },
//   header: {
//     marginBottom: 24,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   sectionContainer: {
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#444',
//     marginBottom: 16,
//   },
//   mealPlanCard: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   mealPlanTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 12,
//   },
//   mealPlanDetails: {
//     marginBottom: 16,
//   },
//   mealPlanDetail: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   viewButton: {
//     backgroundColor: '#4a90e2',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     alignSelf: 'flex-start',
//   },
//   viewButtonText: {
//     color: 'white',
//     fontWeight: '600',
//   },
// });

// export default NutritionTracking;




  import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../Component/header';
import { useRouter } from 'expo-router';  

const NutritionTracking = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
<Header 
  userName="John Doe"
  onProfilePress={() => console.log("")}
  onNotificationPress={() => console.log('Notification pressed')}
  onMenuPress={() => console.log('Menu pressed')} 
/>
<ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nutrition Tracking</Text>
        </View>

        {/* Calorie Summary Cards */}
        <View style={styles.summaryContainer}>
          {/* Calorie Target Card */}
          <View style={[styles.summaryCard, {backgroundColor: '#e3f2fd'}]}>
            <Text style={styles.summaryCardTitle}>Calorie Target</Text>
            <Text style={styles.summaryCardValue}>2,400</Text>
            <Text style={styles.summaryCardUnit}>kcal</Text>
          </View>

          {/* Calorie Taken Card */}
          <View style={[styles.summaryCard, {backgroundColor: '#e8f5e9'}]}>
            <Text style={styles.summaryCardTitle}>Calorie Taken</Text>
            <Text style={styles.summaryCardValue}>1,850</Text>
            <Text style={styles.summaryCardUnit}>kcal</Text>
          </View>
        </View>

        {/* FitViz Meal Plan Suggestions Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>FitViz Meal Plan Suggestions</Text>
          
          {/* Meal Plan Cards */}
          <View style={styles.mealPlanCard}>
            <Text style={styles.mealPlanTitle}>Daily Meal: Breakfast</Text>
            <View style={styles.mealPlanDetails}>
              
              <Text style={styles.mealPlanDetail}>Calories:80</Text>
              <Text style={styles.mealPlanDetail}>Protein: 30g</Text>
              <Text style={styles.mealPlanDetail}>Carbs: 45g</Text>
              <Text style={styles.mealPlanDetail}>Fats: 15g</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>

          {/* Additional meal plan cards can be added here */}
          <View style={[styles.mealPlanCard, {marginTop: 15}]}>
            <Text style={styles.mealPlanTitle}>Daily Meal: Lunch</Text>
            <View style={styles.mealPlanDetails}>
            
              <Text style={styles.mealPlanDetail}>Calories: 600</Text>
              <Text style={styles.mealPlanDetail}>Protein: 40g</Text>
              <Text style={styles.mealPlanDetail}>Carbs: 50g</Text>
              <Text style={styles.mealPlanDetail}>Fats: 20g</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.mealPlanCard, {marginTop: 15}]}>
            <Text style={styles.mealPlanTitle}>Daily Meal: Dinner</Text>
            <View style={styles.mealPlanDetails}>
              
              <Text style={styles.mealPlanDetail}>Calories: 600</Text>
              <Text style={styles.mealPlanDetail}>Protein: 40g</Text>
              <Text style={styles.mealPlanDetail}>Carbs: 50g</Text>
              <Text style={styles.mealPlanDetail}>Fats: 20g</Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
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
  summaryCardTitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  summaryCardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryCardUnit: {
    fontSize: 14,
    color: '#777',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginBottom: 16,
  },
  mealPlanCard: {
    backgroundColor: 'lightgray', 
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mealPlanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  mealPlanDetails: {
    marginBottom: 16,
  },
  mealPlanDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  viewButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  viewButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default NutritionTracking;