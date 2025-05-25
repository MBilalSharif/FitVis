import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export default function TabLayout() {
 

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: height * 0.09,
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={24}
                color={focused ? "#000" : "#9CA3AF"}
              />
              <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* Workouts / Categories */}
      <Tabs.Screen
        name="workouts"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "apps" : "apps-outline"}
                size={24}
                color={focused ? "#000" : "#9CA3AF"}
              />
              <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
                Workouts
              </Text>
            </View>
          ),
        }}
      />

         {/* Device / Categories */}
      {/* <Tabs.Screen
        name="device"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "apps" : "apps-outline"}
                size={24}
                color={focused ? "#000" : "#9CA3AF"}
              />
              <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
                Gadget
              </Text>
            </View>
          ),
        }}
      /> */}


      {/* Meals / Calendar */}
      <Tabs.Screen
        name="meals"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <MaterialIcons
                name="restaurant-menu"
                size={24}
                color={focused ? "#000" : "#9CA3AF"}
              />
              <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
                Meals
              </Text>
            </View>
          ),
        }}
      />

      {/* Trainer / Profile */}
      <Tabs.Screen
        name="trainer"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? "#000" : "#9CA3AF"}
              />
              <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
                Trainer
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: width / 4,
    height: "100%",
  },
  tabLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
  tabLabelFocused: {
    color: "#000", // black when focused
    fontWeight: "600",
  },
});
