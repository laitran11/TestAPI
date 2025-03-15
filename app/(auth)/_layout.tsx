// app/_layout.tsx
import { useState, useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from "react-native";


SplashScreen.preventAutoHideAsync();

const widthscreen = Dimensions.get('screen').width;
export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Stack>
        <Stack.Screen name="Authen" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} /> */}
      {/* {isAuthenticated ? (
        // Main application screens
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        // Authentication screens
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )} */}
    </Stack>
  );
}
