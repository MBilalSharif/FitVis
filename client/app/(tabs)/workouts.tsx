import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../Component/header'; // Assuming you have a Header component
import { useRouter } from 'expo-router'; // Import useRouter from expo-router

const WorkoutScreen = () => {

    const router = useRouter();


  const weekdays = ['F', 'S', 'S', 'M', 'T', 'W', 'T'];
  const dates = ['09', '10', '11', '12', '13', '14', '15'];
  const skillLevels = ['Basic', 'Intermediate', 'Advance'];
  const [selectedLevel, setSelectedLevel] = React.useState('Basic');

  const workoutCategories = [
    { id: '1', title: 'Strength', count: '06', subtitle: 'Workout Programs' },
    { id: '2', title: 'Cardio', count: '08', subtitle: 'Workout Programs' },
    { id: '3', title: 'Stretch', count: '10', subtitle: 'Workout Programs' },
  ];

  return (
    <>
      <Header
        userName="John Doe"
        showBackButton={true}
        onBackPress={() => router.back()}
        disableProfile={true} // Set to false if you want clickable profile icon
        showUserName={false} // Hide username if you want just the back button  
        />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>FitViz Suggested Workouts</Text>
            <Text style={styles.subtitle}>
              Customize your workout routines to fit your preferences and have fun!
            </Text>
          </View>

          {/* Weekdays and Dates */}
          <View style={styles.weekContainer}>
            <View style={styles.weekdaysRow}>
              {weekdays.map((day, index) => (
                <View key={`day-${index}`} style={styles.dayContainer}>
                  <Text style={styles.weekdayText}>{day}</Text>
                </View>
              ))}
            </View>
            <View style={styles.datesRow}>
              {dates.map((date, index) => (
                <View key={`date-${index}`} style={styles.dateContainer}>
                  <Text style={styles.dateText}>{date}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Skill Level Buttons */}
          <View style={styles.skillLevelContainer}>
            {skillLevels.map((level) => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.skillButton,
                  selectedLevel === level && styles.selectedSkillButton
                ]}
                onPress={() => {
        setSelectedLevel(level);
        if (level === 'Intermediate') {
        router.push('/fitnessTab/intermediateExcercise'); // Navigate to intermediate exercises
        }
        else if (level === 'Advance') {
          router.push('/fitnessTab/advanceExcercise'); // Navigate to advance exercises
        }
      }
    }
              >
                <Text style={[
                  styles.skillButtonText,
                  selectedLevel === level && styles.selectedSkillButtonText
                ]}>
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

         <View style={styles.container}>
      {workoutCategories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{category.title}</Text>
            <View style={styles.countContainer}>
              <Text style={styles.countText}>{category.count}</Text>
              <Text style={styles.subtitleText}>{category.subtitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
          

          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
  weekContainer: {
    marginBottom: 20,
  },
  weekdaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    width: 40,
    alignItems: 'center',
  },
  dateContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekdayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7f8c8d',
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
  },
  skillLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  countContainer: {
    alignItems: 'flex-end',
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: '#7f8c8d',
  },



  skillButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  selectedSkillButton: {
    backgroundColor: '#3498db',
  },
  skillButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7f8c8d',
  },
  selectedSkillButtonText: {
    color: '#fff',
  },
  categoryContainer: {
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  programInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  programCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginRight: 10,
  },
  programText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  progressContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3498db',
  },
});

export default WorkoutScreen;