import { Stack } from "expo-router";
import React from "react";
import { SignupProvider } from "./context/SignupContext";

export default function RootLayout() {
  return (
    <SignupProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Splash, login, signup, etc. */}
        <Stack.Screen name="splash" />
        <Stack.Screen name="registration/login" />
        <Stack.Screen name="registration/signup" />

        {/* User and trainer sections */}
        <Stack.Screen name="user" />
        <Stack.Screen name="trainer" />
      </Stack>
    </SignupProvider>
  );
}
