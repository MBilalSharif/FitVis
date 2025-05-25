// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';
// import Header from '@/app/Component/header'; // Adjust the import path as necessary

// const DashboardScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>

        

//         <Header 
//           userName="John Doe"
//           onProfilePress={() => router.push('/dashboard/profileEdit')}
//           onNotificationPress={() => console.log('Notification pressed')}
//           onMenuPress={() => console.log('Menu pressed')} 
//         />
       

//         {/* Today's Workout Plan Section */}
//         <View style={styles.section}></View>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Today's Workout Plan</Text>
//             <TouchableOpacity>
//               <Text style={styles.viewAll}>View All</Text>
//             </TouchableOpacity>
//           </View>
          
//           {/* Workout Card */}
// <View style={styles.workoutCard}>
//   {/* Background Image */}
//   <Image 
//     source={require('@/assets/images/backgroundImage.png')} 
//     style={styles.workoutBackgroundImage}
//     resizeMode="cover"
//   />
//   {/* Dark Overlay */}
//   <View style={styles.workoutOverlay} />
  
//   {/* Card Content */}
//   <View style={styles.workoutCardContent}>
//     <Text style={styles.workoutName}>Upper Body Strength</Text>
//     <View style={styles.workoutMetrics}>
//       <View style={styles.workoutMetric}>
//         <Ionicons name="flame-outline" size={20} color="#EF4444" />
//         <Text style={styles.workoutMetricValue}>500 Kcal</Text>
//       </View>
//       <View style={styles.workoutMetric}>
//         <Ionicons name="time-outline" size={20} color="#3B82F6" />
//         <Text style={styles.workoutMetricValue}>50 Min</Text>
//       </View>
//     </View>
//   </View>
//   <TouchableOpacity style={styles.workoutPlayButton}>
//     <Ionicons name="play" size={24} color="white" />
//   </TouchableOpacity>
// </View>

//       {/* Suggested Meal Section */}
// <View style={styles.section}>
//   <Text style={styles.sectionTitle1}>Suggested Meal: Breakfast</Text>
//   <View style={styles.mealCard}>
//     <View style={styles.mealHeader}>
//       <TouchableOpacity style={styles.addIconContainer}>
//         <Image 
//           source={require('@/assets/images/Vector.png')}
//           style={styles.addIcon}
//         />
//       </TouchableOpacity>

//         <Text style={styles.mealType}>Breakfast</Text>
//       <Image 
//         source={require('@/assets/images/addIcon.png')}
//         style={styles.mealIcon}
//       />
      
//     </View>
    
//     <View style={styles.mealItemsContainer}>
//       <View style={styles.mealItem}>
//         <View style={styles.mealItemLeft}>
//           <Text style={styles.mealItemName}>Large Size Egg</Text>
//           <Text style={styles.mealItemQuantity}>3 eggs</Text>
//         </View>
//         <Text style={styles.mealItemCalories}>273 cals</Text>
//       </View>
      
//       <View style={styles.mealItem}>
//         <View style={styles.mealItemLeft}>
//           <Text style={styles.mealItemName}>Chicken Breast</Text>
//           <Text style={styles.mealItemQuantity}>100 g</Text>
//         </View>
//         <Text style={styles.mealItemCalories}>273 cals</Text>
//       </View>
      
//       <View style={styles.mealItem}>
//         <View style={styles.mealItemLeft}>
//           <Text style={styles.mealItemName}>Blueberries</Text>
//           <Text style={styles.mealItemQuantity}>100 g</Text>
//         </View>
//         <Text style={styles.mealItemCalories}>92 cals</Text>
//       </View>
//     </View>
//   </View>
// </View>
//         {/* Progress Cards Section */}
//         <View style={styles.section}>
//           <View style={styles.progressCardsContainer}>
//             {/* Calories Consumed Card */}
//             <View style={[styles.progressCard, styles.caloriesCard]}>
//               <View style={styles.progressCardContent}>
//                 <Text style={styles.progressCardTitle}>Calories consumed</Text>
//                 <Text style={styles.progressCardValue}>758</Text>
//                 <View style={styles.progressBar}>
//                   <View style={[styles.progressFill, {width: '88%'}]} />
//                 </View>
//                 <Text style={styles.progressPercentage}>88%</Text>
//               </View>
//               <Image 
//                 source={require('@/assets/images/Group.png')}
//                 style={styles.progressCardIcon}
//               />
//             </View>

//             {/* Workout Completed Card */}
//             <View style={[styles.progressCard, styles.workoutCompleteCard]}>
//               <View style={styles.progressCardContent}>
//                 <Text style={styles.progressCardTitle}>Workout Completed</Text>
//                 <Text style={styles.progressCardValue}>7/10</Text>
//                 <View style={styles.progressBar}>
//                   <View style={[styles.progressFill, {width: '100%', backgroundColor: '#10B981'}]} />
//                 </View>
//                 <Text style={styles.progressPercentage}>70%</Text>
//               </View>
//               <Image 
//                 source={require('@/assets/images/completion.png')}
//                 style={styles.progressCardIcon}
//               />
//             </View>
//           </View>
//         </View>

//         {/* Trainer Support */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Trainer Support</Text>
//           <View style={styles.trainerCard}>
//             <View style={styles.trainerHeader}>
//               <Image 
//                 source={require('@/assets/images/user-icon.png')} 
//                 style={styles.trainerImage}
//               />
//               <View>
//                 <Text style={styles.trainerName}>Gym Trainer</Text>
//                 <Text style={styles.trainerBio}>Workout suggestion</Text>
//               </View>
//             </View>
//             <View style={styles.trainerActions}>
//               <TouchableOpacity style={styles.chatButton}>
//                 <Text style={styles.buttonText}>Chat</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.navigateButton}>
//                 <Text style={[styles.buttonText, {color: '#111827'}]}>Navigate</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>


//       {/* Bottom Navigation */}
//       {/* <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('@/assets/images/home.png')} style={styles.navIcon} />
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('@/assets/images/library.png')} style={styles.navIcon} />
//           <Text style={styles.navText}>Workouts</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('@/assets/images/meal-icon.png')} style={styles.navIcon} />
//           <Text style={styles.navText}>Meals</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('@/assets/images/user-icon.png')} style={styles.navIcon} />
//           <Text style={styles.navText}>Trainer</Text>
//         </TouchableOpacity>
//       </View> */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   scrollContainer: {
//     paddingBottom: 80,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     paddingTop: 10,
//   },
//   profileContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
// },
// profileIcon: {
//   width: 40,
//   height: 40,
//   borderRadius: 20,
//   marginRight: 12,
// },
// profileTextContainer: {
//   justifyContent: 'center',
// },
//   welcomeText: {
//     fontSize: 16,
//     color: '#6B7280',
//   },
//   userName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginTop: 4,
//   },
//   headerIcons: {
//     flexDirection: 'row',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginLeft: 20,
//     tintColor: '#111827',
//   },
//   section: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#111827',
//     marginLeft: 15,
//     marginBottom: 0,
//   },
//   sectionTitle1: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginLeft: 10,
//     marginBottom: 15,
//     marginTop: 10,
//   },
//   viewAll: {
//     fontSize: 14,
//     color: '#2563EB',
//     fontWeight: '500',
//     marginRight: 20,
//   },

//   workoutCard: {
//   backgroundColor: '#FFFFFF',
//   borderRadius: 12,
//   padding: 0,
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.1,
//   shadowRadius: 6,
//   elevation: 3,
//   overflow: 'hidden', // Important for the background image
//   height: 120, // Adjust as needed
//   position: 'relative', // For absolute positioning of background
//   margin:10,
// },
// workoutBackgroundImage: {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   width: '100%',
//   height: '100%',
// },
// workoutOverlay: {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay for better text visibility
// },
// workoutCardContent: {
//   flex: 1,
//   zIndex: 1,
//   padding: 16,
// },
// workoutName: {
//   fontSize: 16,
//   fontWeight: '600',
//   color: 'white', // Changed to white for better contrast
//   marginBottom: 32,
// },
// workoutMetricValue: {
//   fontSize: 14,
//   fontWeight: '500',
//   color: 'white', // Changed to white for better contrast
// },
// // Keep all other existing styles the same
  
  
//   workoutMetrics: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   workoutMetric: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//   },

//   workoutPlayButton: {
//     backgroundColor: '#2563EB',
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 16,
//   },

//   mealCard: {
//   backgroundColor: '#FFFFFF',
//   borderRadius: 12,
//   padding: 16,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.1,
//   shadowRadius: 6,
//   elevation: 3,
// },

// mealHeader: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginBottom: 16,
//   paddingBottom: 12,
//   borderBottomWidth: 1,
//   borderBottomColor: '#E5E7EB',
// },
// addIconContainer: {
//   marginRight: 10,
// },
// addIcon: {
//   width: 20,
//   height: 20,
//   tintColor: '#6781BB',
// },
// mealIcon: {
//   width: 24,
//   height: 24,
//   marginRight: 10,
//   tintColor: '#6781BB',
// },
// mealType: {
//   fontSize: 16,
//   fontWeight: 'bold',
//   color: '#111827',
//   flex: 1,
// },



// mealItemsContainer: {
//   marginTop: 8,
// },
// mealItem: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: 16,
// },
// mealItemLeft: {
//   flex: 1,
// },
// mealItemName: {
//   fontSize: 14,
//   fontWeight: '500',
//   color: '#111827',
// },
// mealItemQuantity: {
//   fontSize: 12,
//   color: '#6B7280',
//   marginTop: 4,
// },
// mealItemCalories: {
//   fontSize: 14,
//   fontWeight: '500',
//   color: '#EF4444',
//   marginLeft: 10,
// },
  
 
 
//   progressCardsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
//   progressCard: {
//     width: '48%',
//     borderRadius: 12,
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   caloriesCard: {
//     backgroundColor: '#FFF6F6',
//   },
//   workoutCompleteCard: {
//     backgroundColor: '#F0FDF4',
//   },
//   progressCardContent: {
//     flex: 1,
//   },
//   progressCardTitle: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginBottom: 8,
//   },
//   progressCardValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 8,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#E5E7EB',
//     borderRadius: 3,
//     marginBottom: 4,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#EF4444',
//     borderRadius: 3,
//   },
//   progressPercentage: {
//     fontSize: 12,
//     color: '#6B7280',
//   },
//   progressCardIcon: {
//     width: 40,
//     height: 40,
//     marginLeft: 10,
//   },
//   trainerCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   trainerHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   trainerImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   trainerName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//   },
//   trainerBio: {
//     fontSize: 12,
//     color: '#6B7280',
//     marginTop: 4,
//   },
//   trainerActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   chatButton: {
//     flex: 1,
//     backgroundColor: '#2563EB',
//     borderRadius: 8,
//     padding: 12,
//     marginRight: 8,
//     alignItems: 'center',
//   },
//   navigateButton: {
//     flex: 1,
//     backgroundColor: '#E5E7EB',
//     borderRadius: 8,
//     padding: 12,
//     marginLeft: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E7EB',
//     backgroundColor: '#FFFFFF',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     marginBottom: 10,
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navIcon: {
//     width: 24,
//     height: 24,
//     marginBottom: 4,
//     tintColor: '#6B7280',
//   },
//   navText: {
//     fontSize: 12,
//     color: '#6B7280',
//   },
// });

// export default DashboardScreen;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const DashboardScreen= () => {
  // Trainer data with different images
  const trainersData = [
    { id: 1, name: "Brendan Taylor", rate: "$15/hr", specialty: "Gym", image: require('@/assets/images/TrainerImg.png') },
    { id: 2, name: "Sarah Johnson", rate: "$18/hr", specialty: "Yoga", image: require('@/assets/images/TrainerImg2.png') },
    { id: 3, name: "Mike Rodriguez", rate: "$20/hr", specialty: "Athletic", image: require('@/assets/images/TrainerImg4.png') },
    { id: 4, name: "Lisa Chen", rate: "$16/hr", specialty: "Yoga", image: require('@/assets/images/TrainerImg3.png') },
    { id: 5, name: "David Wilson", rate: "$22/hr", specialty: "Gym", image: require('@/assets/images/TrainerImg2.png') },
    { id: 6, name: "Emma Garcia", rate: "$19/hr", specialty: "Athletic", image: require('@/assets/images/TrainerImg4.png') },
    { id: 7, name: "James Brown", rate: "$17/hr", specialty: "Gym", image: require('@/assets/images/TrainerImg2.png') },
  ];

  const assignedTrainer = {
    id: 8,
    name: "Rodolfo Goode",
    role: "My Assigned Trainer",
    rate: "$25/hr",
    image: require('@/assets/images/TrainerImg.png')
  };

  return (
    <View style={styles.container}>
      {/* Header with date */}
      <View style={styles.header}>
        <Text style={styles.date}>F1, 03 March</Text>
        <Text style={styles.greeting}>Good Morning</Text>
      </View>

      {/* Assigned Trainer Card */}
      <View style={styles.assignedTrainerCard}>
        <View style={styles.assignedTrainerInfo}>
          <Text style={styles.assignedTrainerName}>{assignedTrainer.name}</Text>
          <Text style={styles.assignedTrainerRole}>{assignedTrainer.role}</Text>
          <Text style={styles.assignedTrainerRate}>{assignedTrainer.rate}</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>View Profile</Text>
          </TouchableOpacity>
        </View>
        <Image 
          source={assignedTrainer.image} 
          style={styles.assignedTrainerImage}
          resizeMode="cover"
        />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Trainers section header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trainers</Text>
        <TouchableOpacity>
          <Text style={styles.detailsLink}>Details</Text>
        </TouchableOpacity>
      </View>

      {/* Filter tabs */}
      <View style={styles.filterTabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>All Type</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Gym</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Yoga</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Athletic</Text>
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>

      {/* Trainers list */}
      <FlatList
        data={trainersData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.trainersGrid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.trainerCard}
            onPress={() => router.push('/dashboard/trainerDetail')}
          >
            <Image 
              source={item.image} 
              style={styles.trainerImage}
              resizeMode="cover"
            />
            <Text style={styles.trainerName}>{item.name}</Text>
            <Text style={styles.trainerRate}>{item.rate}</Text>
            <Text style={styles.trainerSpecialty}>{item.specialty}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.trainersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  assignedTrainerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  assignedTrainerInfo: {
    flex: 1,
  },
  assignedTrainerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  assignedTrainerRole: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  assignedTrainerRate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  assignedTrainerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 16,
  },
  profileButton: {
    alignSelf: 'flex-start',
  },
  profileButtonText: {
    color: '#007AFF',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailsLink: {
    color: '#007AFF',
    fontWeight: '500',
  },
  filterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  activeTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#e3f2fd',
    borderRadius: 16,
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '500',
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  tabText: {
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  trainersList: {
    paddingBottom: 20,
  },
  trainersGrid: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  trainerCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  trainerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  trainerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  trainerRate: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 4,
  },
  trainerSpecialty: {
    fontSize: 12,
    color: '#666',
  },
});

export default DashboardScreen;