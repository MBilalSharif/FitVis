// // import React from 'react';
// // import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { router } from 'expo-router';
// // import Header from '@/app/Component/header'; // Adjust the import path as necessary

// // const DashboardScreen = () => {
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>

        

// //         <Header 
// //           userName="John Doe"
// //           onProfilePress={() => router.push('/profileEdits/profileEdit1')}
// //           onNotificationPress={() => console.log('Notification pressed')}
// //           onMenuPress={() => console.log('Menu pressed')} 
// //         />
       

// //         {/* Today's Workout Plan Section */}
// //         <View style={styles.section}></View>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Today's Workout Plan</Text>
// //             <TouchableOpacity>
// //               <Text style={styles.viewAll}>View All</Text>
// //             </TouchableOpacity>
// //           </View>
          
// //           {/* Workout Card */}
// // <View style={styles.workoutCard}>
// //   {/* Background Image */}
// //   <Image 
// //     source={require('@/assets/images/backgroundImage.png')} 
// //     style={styles.workoutBackgroundImage}
// //     resizeMode="cover"
// //   />
// //   {/* Dark Overlay */}
// //   <View style={styles.workoutOverlay} />
  
// //   {/* Card Content */}
// //   <View style={styles.workoutCardContent}>
// //     <Text style={styles.workoutName}>Upper Body Strength</Text>
// //     <View style={styles.workoutMetrics}>
// //       <View style={styles.workoutMetric}>
// //         <Ionicons name="flame-outline" size={20} color="#EF4444" />
// //         <Text style={styles.workoutMetricValue}>500 Kcal</Text>
// //       </View>
// //       <View style={styles.workoutMetric}>
// //         <Ionicons name="time-outline" size={20} color="#3B82F6" />
// //         <Text style={styles.workoutMetricValue}>50 Min</Text>
// //       </View>
// //     </View>
// //   </View>
// //   <TouchableOpacity style={styles.workoutPlayButton}>
// //     <Ionicons name="play" size={24} color="white" />
// //   </TouchableOpacity>
// // </View>

// //       {/* Suggested Meal Section */}
// // <View style={styles.section}>
// //   <Text style={styles.sectionTitle1}>Suggested Meal: Breakfast</Text>
// //   <View style={styles.mealCard}>
// //     <View style={styles.mealHeader}>
// //       <TouchableOpacity style={styles.addIconContainer}>
// //         <Image 
// //           source={require('@/assets/images/Vector.png')}
// //           style={styles.addIcon}
// //         />
// //       </TouchableOpacity>

// //         <Text style={styles.mealType}>Breakfast</Text>
// //       <Image 
// //         source={require('@/assets/images/addIcon.png')}
// //         style={styles.mealIcon}
// //       />
      
// //     </View>
    
// //     <View style={styles.mealItemsContainer}>
// //       <View style={styles.mealItem}>
// //         <View style={styles.mealItemLeft}>
// //           <Text style={styles.mealItemName}>Large Size Egg</Text>
// //           <Text style={styles.mealItemQuantity}>3 eggs</Text>
// //         </View>
// //         <Text style={styles.mealItemCalories}>273 cals</Text>
// //       </View>
      
// //       <View style={styles.mealItem}>
// //         <View style={styles.mealItemLeft}>
// //           <Text style={styles.mealItemName}>Chicken Breast</Text>
// //           <Text style={styles.mealItemQuantity}>100 g</Text>
// //         </View>
// //         <Text style={styles.mealItemCalories}>273 cals</Text>
// //       </View>
      
// //       <View style={styles.mealItem}>
// //         <View style={styles.mealItemLeft}>
// //           <Text style={styles.mealItemName}>Blueberries</Text>
// //           <Text style={styles.mealItemQuantity}>100 g</Text>
// //         </View>
// //         <Text style={styles.mealItemCalories}>92 cals</Text>
// //       </View>
// //     </View>
// //   </View>
// // </View>
// //         {/* Progress Cards Section */}
// //         <View style={styles.section}>
// //           <View style={styles.progressCardsContainer}>
// //             {/* Calories Consumed Card */}
// //             <View style={[styles.progressCard, styles.caloriesCard]}>
// //               <View style={styles.progressCardContent}>
// //                 <Text style={styles.progressCardTitle}>Calories consumed</Text>
// //                 <Text style={styles.progressCardValue}>758</Text>
// //                 <View style={styles.progressBar}>
// //                   <View style={[styles.progressFill, {width: '88%'}]} />
// //                 </View>
// //                 <Text style={styles.progressPercentage}>88%</Text>
// //               </View>
// //               <Image 
// //                 source={require('@/assets/images/Group.png')}
// //                 style={styles.progressCardIcon}
// //               />
// //             </View>

// //             {/* Workout Completed Card */}
// //             <View style={[styles.progressCard, styles.workoutCompleteCard]}>
// //               <View style={styles.progressCardContent}>
// //                 <Text style={styles.progressCardTitle}>Workout Completed</Text>
// //                 <Text style={styles.progressCardValue}>7/10</Text>
// //                 <View style={styles.progressBar}>
// //                   <View style={[styles.progressFill, {width: '100%', backgroundColor: '#10B981'}]} />
// //                 </View>
// //                 <Text style={styles.progressPercentage}>70%</Text>
// //               </View>
// //               <Image 
// //                 source={require('@/assets/images/completion.png')}
// //                 style={styles.progressCardIcon}
// //               />
// //             </View>
// //           </View>
// //         </View>

// //         {/* Trainer Support */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Trainer Support</Text>
// //           <View style={styles.trainerCard}>
// //             <View style={styles.trainerHeader}>
// //               <Image 
// //                 source={require('@/assets/images/user-icon.png')} 
// //                 style={styles.trainerImage}
// //               />
// //               <View>
// //                 <Text style={styles.trainerName}>Gym Trainer</Text>
// //                 <Text style={styles.trainerBio}>Workout suggestion</Text>
// //               </View>
// //             </View>
// //             <View style={styles.trainerActions}>
// //               <TouchableOpacity style={styles.chatButton}>
// //                 <Text style={styles.buttonText}>Chat</Text>
// //               </TouchableOpacity>
// //               <TouchableOpacity style={styles.navigateButton}>
// //                 <Text style={[styles.buttonText, {color: '#111827'}]}>Navigate</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </View>
// //       </ScrollView>


// //       {/* Bottom Navigation */}
// //       <View style={styles.bottomNav}>
// //         <TouchableOpacity style={styles.navItem}>
// //           <Image source={require('@/assets/images/home.png')} style={styles.navIcon} />
// //           <Text style={styles.navText}>Home</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.navItem}>
// //           <Image source={require('@/assets/images/library.png')} style={styles.navIcon} />
// //           <Text style={styles.navText}>Workouts</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.navItem}>
// //           <Image source={require('@/assets/images/meal-icon.png')} style={styles.navIcon} />
// //           <Text style={styles.navText}>Meals</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.navItem}>
// //           <Image source={require('@/assets/images/user-icon.png')} style={styles.navIcon} />
// //           <Text style={styles.navText}>Trainer</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F5F5F5',
// //   },
// //   scrollContainer: {
// //     paddingBottom: 80,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 20,
// //     paddingTop: 10,
// //   },
// //   profileContainer: {
// //   flexDirection: 'row',
// //   alignItems: 'center',
// // },
// // profileIcon: {
// //   width: 40,
// //   height: 40,
// //   borderRadius: 20,
// //   marginRight: 12,
// // },
// // profileTextContainer: {
// //   justifyContent: 'center',
// // },
// //   welcomeText: {
// //     fontSize: 16,
// //     color: '#6B7280',
// //   },
// //   userName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#111827',
// //     marginTop: 4,
// //   },
// //   headerIcons: {
// //     flexDirection: 'row',
// //   },
// //   icon: {
// //     width: 24,
// //     height: 24,
// //     marginLeft: 20,
// //     tintColor: '#111827',
// //   },
// //   section: {
// //     paddingHorizontal: 20,
// //     marginBottom: 20,
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: '600',
// //     color: '#111827',
// //     marginLeft: 15,
// //     marginBottom: 0,
// //   },
// //   sectionTitle1: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#111827',
// //     marginLeft: 10,
// //     marginBottom: 15,
// //     marginTop: 10,
// //   },
// //   viewAll: {
// //     fontSize: 14,
// //     color: '#2563EB',
// //     fontWeight: '500',
// //     marginRight: 20,
// //   },

// //   workoutCard: {
// //   backgroundColor: '#FFFFFF',
// //   borderRadius: 12,
// //   padding: 0,
// //   flexDirection: 'row',
// //   justifyContent: 'space-between',
// //   alignItems: 'center',
// //   shadowColor: '#000',
// //   shadowOffset: { width: 0, height: 2 },
// //   shadowOpacity: 0.1,
// //   shadowRadius: 6,
// //   elevation: 3,
// //   overflow: 'hidden', // Important for the background image
// //   height: 120, // Adjust as needed
// //   position: 'relative', // For absolute positioning of background
// //   margin:10,
// // },
// // workoutBackgroundImage: {
// //   position: 'absolute',
// //   top: 0,
// //   left: 0,
// //   right: 0,
// //   bottom: 0,
// //   width: '100%',
// //   height: '100%',
// // },
// // workoutOverlay: {
// //   position: 'absolute',
// //   top: 0,
// //   left: 0,
// //   right: 0,
// //   bottom: 0,
// //   backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay for better text visibility
// // },
// // workoutCardContent: {
// //   flex: 1,
// //   zIndex: 1,
// //   padding: 16,
// // },
// // workoutName: {
// //   fontSize: 16,
// //   fontWeight: '600',
// //   color: 'white', // Changed to white for better contrast
// //   marginBottom: 32,
// // },
// // workoutMetricValue: {
// //   fontSize: 14,
// //   fontWeight: '500',
// //   color: 'white', // Changed to white for better contrast
// // },
// // // Keep all other existing styles the same
  
  
// //   workoutMetrics: {
// //     flexDirection: 'row',
// //     gap: 16,
// //   },
// //   workoutMetric: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 6,
// //   },

// //   workoutPlayButton: {
// //     backgroundColor: '#2563EB',
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 16,
// //   },

// //   mealCard: {
// //   backgroundColor: '#FFFFFF',
// //   borderRadius: 12,
// //   padding: 16,
// //   shadowColor: '#000',
// //   shadowOffset: { width: 0, height: 2 },
// //   shadowOpacity: 0.1,
// //   shadowRadius: 6,
// //   elevation: 3,
// // },

// // mealHeader: {
// //   flexDirection: 'row',
// //   alignItems: 'center',
// //   marginBottom: 16,
// //   paddingBottom: 12,
// //   borderBottomWidth: 1,
// //   borderBottomColor: '#E5E7EB',
// // },
// // addIconContainer: {
// //   marginRight: 10,
// // },
// // addIcon: {
// //   width: 20,
// //   height: 20,
// //   tintColor: '#6781BB',
// // },
// // mealIcon: {
// //   width: 24,
// //   height: 24,
// //   marginRight: 10,
// //   tintColor: '#6781BB',
// // },
// // mealType: {
// //   fontSize: 16,
// //   fontWeight: 'bold',
// //   color: '#111827',
// //   flex: 1,
// // },



// // mealItemsContainer: {
// //   marginTop: 8,
// // },
// // mealItem: {
// //   flexDirection: 'row',
// //   justifyContent: 'space-between',
// //   alignItems: 'center',
// //   marginBottom: 16,
// // },
// // mealItemLeft: {
// //   flex: 1,
// // },
// // mealItemName: {
// //   fontSize: 14,
// //   fontWeight: '500',
// //   color: '#111827',
// // },
// // mealItemQuantity: {
// //   fontSize: 12,
// //   color: '#6B7280',
// //   marginTop: 4,
// // },
// // mealItemCalories: {
// //   fontSize: 14,
// //   fontWeight: '500',
// //   color: '#EF4444',
// //   marginLeft: 10,
// // },
  
 
 
// //   progressCardsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 10,
// //   },
// //   progressCard: {
// //     width: '48%',
// //     borderRadius: 12,
// //     padding: 16,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 6,
// //     elevation: 3,
// //   },
// //   caloriesCard: {
// //     backgroundColor: '#FFF6F6',
// //   },
// //   workoutCompleteCard: {
// //     backgroundColor: '#F0FDF4',
// //   },
// //   progressCardContent: {
// //     flex: 1,
// //   },
// //   progressCardTitle: {
// //     fontSize: 14,
// //     color: '#6B7280',
// //     marginBottom: 8,
// //   },
// //   progressCardValue: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#111827',
// //     marginBottom: 8,
// //   },
// //   progressBar: {
// //     height: 6,
// //     backgroundColor: '#E5E7EB',
// //     borderRadius: 3,
// //     marginBottom: 4,
// //     overflow: 'hidden',
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#EF4444',
// //     borderRadius: 3,
// //   },
// //   progressPercentage: {
// //     fontSize: 12,
// //     color: '#6B7280',
// //   },
// //   progressCardIcon: {
// //     width: 40,
// //     height: 40,
// //     marginLeft: 10,
// //   },
// //   trainerCard: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 12,
// //     padding: 16,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 6,
// //     elevation: 3,
// //   },
// //   trainerHeader: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   trainerImage: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     marginRight: 12,
// //   },
// //   trainerName: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#111827',
// //   },
// //   trainerBio: {
// //     fontSize: 12,
// //     color: '#6B7280',
// //     marginTop: 4,
// //   },
// //   trainerActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   chatButton: {
// //     flex: 1,
// //     backgroundColor: '#2563EB',
// //     borderRadius: 8,
// //     padding: 12,
// //     marginRight: 8,
// //     alignItems: 'center',
// //   },
// //   navigateButton: {
// //     flex: 1,
// //     backgroundColor: '#E5E7EB',
// //     borderRadius: 8,
// //     padding: 12,
// //     marginLeft: 8,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     fontSize: 14,
// //     fontWeight: '500',
// //   },
// //   bottomNav: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     paddingVertical: 12,
// //     borderTopWidth: 1,
// //     borderTopColor: '#E5E7EB',
// //     backgroundColor: '#FFFFFF',
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     marginBottom: 10,
// //   },
// //   navItem: {
// //     alignItems: 'center',
// //   },
// //   navIcon: {
// //     width: 24,
// //     height: 24,
// //     marginBottom: 4,
// //     tintColor: '#6B7280',
// //   },
// //   navText: {
// //     fontSize: 12,
// //     color: '#6B7280',
// //   },
// // });

// // export default DashboardScreen;




// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const TrainerScreen = () => {
//   // Sample data for trainers
//   const trainers = Array(7).fill({
//     name: "Brendans",
//     rate: "$15/hr"
//   });

//   return (
//     <View style={styles.container}>
//       {/* Header with date */}
//       <View style={styles.header}>
//         <Text style={styles.date}>F1, 03 March</Text>
//         <Text style={styles.greeting}>Good Morning</Text>
//       </View>

//       {/* User profile section */}
//       <View style={styles.profileSection}>
//         <Text style={styles.profileName}>Rodolfo Goode</Text>
//         <Text style={styles.profileRole}>My Assigned Trainer</Text>
//         <TouchableOpacity style={styles.profileButton}>
//           <Text style={styles.profileButtonText}>View Profile</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Divider */}
//       <View style={styles.divider} />

//       {/* Trainers section */}
//       <View style={styles.trainersHeader}>
//         <Text style={styles.trainersTitle}>Trainers</Text>
//         <TouchableOpacity>
//           <Text style={styles.detailsText}>Details</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Filter tabs */}
//       <View style={styles.filterTabs}>
//         <Text style={styles.activeTab}>All Type</Text>
//         <Text style={styles.tab}>Gym</Text>
//         <Text style={styles.tab}>Yoga</Text>
//         <Text style={styles.tab}>Athletic</Text>
//       </View>

//       {/* Search bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="#999" />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           placeholderTextColor="#999"
//         />
//       </View>

//       {/* Trainers list */}
//       <FlatList
//         data={trainers}
//         renderItem={({ item }) => (
//           <View style={styles.trainerCard}>
//             <Text style={styles.trainerName}>{item.name}</Text>
//             <Text style={styles.trainerRate}>{item.rate}</Text>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2}
//         columnWrapperStyle={styles.columnWrapper}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   header: {
//     marginBottom: 20,
//   },
//   date: {
//     fontSize: 14,
//     color: '#666',
//   },
//   greeting: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 4,
//   },
//   profileSection: {
//     marginBottom: 20,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   profileRole: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   profileButton: {
//     marginTop: 10,
//   },
//   profileButtonText: {
//     color: '#007AFF',
//     fontWeight: '500',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#e0e0e0',
//     marginVertical: 16,
//   },
//   trainersHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   trainersTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   detailsText: {
//     color: '#007AFF',
//     fontWeight: '500',
//   },
//   filterTabs: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   activeTab: {
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   tab: {
//     color: '#666',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     marginBottom: 16,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 8,
//     fontSize: 16,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   trainerCard: {
//     width: '48%',
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//   },
//   trainerName: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   trainerRate: {
//     color: '#666',
//     fontSize: 14,
//   },
// });

// export default TrainerScreen;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TrainerProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trainer Profile</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Trainer Info Section */}
      <View style={styles.trainerInfo}>
        <Image 
          source={require('@/assets/images/TrainerImg2.png')} 
          style={styles.trainerImage}
        />
        <Text style={styles.trainerName}>Brendan Rodger</Text>
        <Text style={styles.trainerRate}>$15/hr</Text>
        
        {/* Tags */}
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Strength</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Circuits</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Cardio</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.section}>
        <Text style={styles.bioText}>
          Brendan believes that by unlocking the body & the mind through a regular strength practice everything else in life becomes... 
          <Text style={styles.readMore}> Read more</Text>
        </Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Reviews Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5/5</Text>
          <Text style={styles.ratingSubtext}>12% Rating: - No-Retives</Text>
        </View>
        <View style={styles.reviewStats}>
          <Text style={styles.reviewStat}>2-24/1</Text>
          <Text style={styles.reviewStat}>1-21/1</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Specialties Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Specialties</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Program Section 1 */}
      <View style={styles.programCard}>
        <Text style={styles.programTitle}>Stronger Lower Body</Text>
        <Text style={styles.programStatus}>(6) Incomplete - 5x / week</Text>
      </View>

      {/* Program Section 2 */}
      <View style={styles.programCard}>
        <Text style={styles.programTitle}>Strength with Band</Text>
        <View style={styles.programFooter}>
          <Text style={styles.programAction}>Check with Trainer</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Trainer - $15/hr</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    width: 24,
  },
  trainerInfo: {
    alignItems: 'center',
    padding: 20,
  },
  trainerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  trainerName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  trainerRate: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    color: '#333',
  },
  section: {
    padding: 16,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  readMore: {
    color: '#007AFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    color: '#007AFF',
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  ratingSubtext: {
    fontSize: 14,
    color: '#666',
  },
  reviewStats: {
    flexDirection: 'row',
  },
  reviewStat: {
    fontSize: 14,
    color: '#666',
    marginRight: 16,
  },
  programCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  programTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  programStatus: {
    fontSize: 14,
    color: '#666',
  },
  programFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  programAction: {
    fontSize: 14,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default TrainerProfileScreen;