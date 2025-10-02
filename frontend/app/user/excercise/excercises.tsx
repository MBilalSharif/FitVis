import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const WorkoutScreen = () => {
  const router = useRouter();

  // Week & Dates
  const weekdays = ["F", "S", "S", "M", "T", "W", "T"];
  const dates = ["09", "10", "11", "12", "13", "14", "15"];
  const [selectedDateIndex, setSelectedDateIndex] = useState(3);

  // Skill Levels
  const skillLevels = ["Basic", "Intermediate", "Advance"];
  const [selectedLevel, setSelectedLevel] = useState("Basic");

  // Workout Categories
  const workoutCategories = [
    {
      id: "1",
      title: "Strength",
      count: "06",
      subtitle: "Workout Programs",
      screen: "/user/workouts/strength",
    },
    {
      id: "2",
      title: "Cardio",
      count: "08",
      subtitle: "Workout Programs",
      screen: "/user/workouts/cardio",
    },
    {
      id: "3",
      title: "Stretch",
      count: "10",
      subtitle: "Workout Programs",
      screen: "/user/workouts/stretch",
    },
  ];

//   const handleCategoryPress = (screen: string) => {
//     router.push(screen);
//   };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Suggested Workouts</Text>
          <Text style={styles.subtitle}>
            Customize your routines to fit your preferences and goals!
          </Text>
        </View>

        {/* Weekdays & Dates */}
        <View style={styles.weekContainer}>
          <View style={styles.weekdaysRow}>
            {weekdays.map((day, index) => (
              <Text
                key={index}
                style={[
                  styles.weekdayText,
                  selectedDateIndex === index && styles.selectedDayText,
                ]}
              >
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.datesRow}>
            {dates.map((date, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDateIndex(index)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.dateContainer,
                    selectedDateIndex === index && styles.selectedDateContainer,
                  ]}
                >
                  <Text
                    style={[
                      styles.dateText,
                      selectedDateIndex === index && styles.selectedDateText,
                    ]}
                  >
                    {date}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Skill Level Buttons */}
        <View style={styles.skillLevelContainer}>
          {skillLevels.map((level) => (
            <TouchableOpacity
              key={level}
              style={[
                styles.skillButton,
                selectedLevel === level && styles.selectedSkillButton,
              ]}
              onPress={() => {
                setSelectedLevel(level);
                if (level === "Intermediate") {
                //   router.push("/user/workouts/intermediate");
                } else if (level === "Advance") {
                //   router.push("/user/workouts/advance");
                }
              }}
            >
              <Text
                style={[
                  styles.skillButtonText,
                  selectedLevel === level && styles.selectedSkillButtonText,
                ]}
              >
                {level}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Workout Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Workout Categories</Text>
          {workoutCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.card}
            //   onPress={() => handleCategoryPress(category.screen)}
              activeOpacity={0.7}
            >
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
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: { padding: 20, paddingBottom: 40 },
  header: { marginBottom: 25 },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#2c3e50" },
  subtitle: { fontSize: 14, color: "#7f8c8d", marginTop: 4 },
  weekContainer: { marginBottom: 20 },
  weekdaysRow: { flexDirection: "row", justifyContent: "space-between" },
  datesRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  dateContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDateContainer: { backgroundColor: "#3498db" },
  weekdayText: { fontSize: 14, fontWeight: "600", color: "#7f8c8d" },
  selectedDayText: { color: "#3498db" },
  dateText: { fontSize: 14, fontWeight: "bold", color: "#2c3e50" },
  selectedDateText: { color: "#fff" },
  skillLevelContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  skillButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  selectedSkillButton: { backgroundColor: "#3498db" },
  skillButtonText: { fontSize: 14, fontWeight: "600", color: "#7f8c8d" },
  selectedSkillButtonText: { color: "#fff" },
  categoriesContainer: { marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#2c3e50", marginBottom: 15 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#2c3e50" },
  countContainer: { alignItems: "flex-end" },
  countText: { fontSize: 22, fontWeight: "bold", color: "#3498db" },
  subtitleText: { fontSize: 14, color: "#7f8c8d" },
});

export default WorkoutScreen;
