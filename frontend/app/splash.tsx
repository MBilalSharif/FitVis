import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
  Easing,
} from "react-native";

const SplashScreen = () => {
  // Animation values
  const [fadeAnim] = useState(new Animated.Value(0));
  const [titlePosition] = useState(new Animated.Value(-100));
  const [subtitleScale] = useState(new Animated.Value(0));
  const [buttonOpacity] = useState(new Animated.Value(0));
  const [dumbbell1Y] = useState(new Animated.Value(300));
  const [dumbbell2Y] = useState(new Animated.Value(-300));
  const [pulseAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    // Pulse animation (continuous)
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Entrance animations
    Animated.parallel([
      Animated.timing(titlePosition, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.back(1)),
        useNativeDriver: true,
      }),
      Animated.spring(subtitleScale, {
        toValue: 1,
        friction: 4,
        tension: 30,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 1200,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dumbbell1Y, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.back(1)),
        useNativeDriver: true,
      }),
      Animated.timing(dumbbell2Y, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.back(1)),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1.05,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.push("/registration/welcome");
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dumbbells */}
      <Animated.View
        style={[
          styles.dumbbell,
          styles.dumbbell1,
          {
            transform: [{ translateY: dumbbell1Y }, { rotate: "-15deg" }],
          },
        ]}
      >
        <View style={styles.dumbbellBar} />
        <View style={styles.dumbbellWeightLeft} />
        <View style={styles.dumbbellWeightRight} />
      </Animated.View>

      <Animated.View
        style={[
          styles.dumbbell,
          styles.dumbbell2,
          {
            transform: [{ translateY: dumbbell2Y }, { rotate: "15deg" }],
          },
        ]}
      >
        <View style={styles.dumbbellBar} />
        <View style={styles.dumbbellWeightLeft} />
        <View style={styles.dumbbellWeightRight} />
      </Animated.View>

      {/* Main content */}
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Animated.Text
          style={[
            styles.title,
            { transform: [{ translateY: titlePosition }, { scale: pulseAnim }] },
          ]}
        >
          FIT<Text style={styles.titleVis}>VIS</Text>
        </Animated.Text>

        <Animated.Text
          style={[
            styles.subtitle,
            { transform: [{ scale: subtitleScale }], opacity: fadeAnim },
          ]}
        >
          SMASH YOUR GOALS {"\n"}
          <Text style={styles.subtitleHighlight}>
            SMART • FAST • STRONG
          </Text>
        </Animated.Text>
      </Animated.View>

      {/* Button */}
      <Animated.View style={[styles.buttonContainer, { opacity: buttonOpacity }]}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handlePress}>
          <Animated.Text style={[styles.buttonText, { transform: [{ scale: pulseAnim }] }]}>
            GET STARTED
          </Animated.Text>
          <View style={styles.buttonIcon}>
            <Image
              source={require("@/assets/images/favicon.png")}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050D30",
    paddingHorizontal: 24,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 120,
  },
  title: {
    color: "#fff",
    fontSize: 52,
    fontWeight: "900",
    marginBottom: 24,
    letterSpacing: 2,
    textAlign: "center",
  },
  titleVis: {
    color: "#2563EB",
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 28,
    marginTop: 16,
  },
  subtitleHighlight: {
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 80,
    left: 24,
    right: 24,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 18,
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 1,
  },
  buttonIcon: {
    position: "absolute",
    right: 24,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  dumbbell: {
    position: "absolute",
    width: 120,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  dumbbellBar: {
    width: 80,
    height: 10,
    backgroundColor: "rgba(37, 99, 235, 0.6)",
    borderRadius: 5,
    position: "absolute",
  },
  dumbbellWeightLeft: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(37, 99, 235, 0.4)",
    position: "absolute",
    left: 0,
  },
  dumbbellWeightRight: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(37, 99, 235, 0.4)",
    position: "absolute",
    right: 0,
  },
  dumbbell1: {
    top: "25%",
    left: "10%",
  },
  dumbbell2: {
    bottom: "30%",
    right: "10%",
  },
});

export default SplashScreen;
