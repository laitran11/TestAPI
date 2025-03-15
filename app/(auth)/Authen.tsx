// app/_layout.tsx
import { useState, useEffect } from 'react';
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import authenImage from "../../assets/images/bachground/Authen.png";
import ButtonOboarding from '@/components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const widthscreen = Dimensions.get('screen').width;
export default function Authen() {
    const router = useRouter();
    const navigation = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignIn = () => {
    // Implement sign-in logic
    router.replace('index');
  };
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Image source={authenImage} style={styles.image} />
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={{ marginVertical: 10, fontSize: 32, fontWeight: '600' }}>Khám phá RecipeLens</Text>
        <Text style={{ marginVertical: 10 }}>Có ngay món ăn ngay tầm tay</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonOboarding title="Đăng nhập" />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Pressable style={{ marginVertical: 10 }} 
        >
          <Text style={{ color: '#8E98A8' }} onPress={handleSignIn}>Tiếp tục và đăng ký sau</Text>
        </Pressable>
      </View>
    </View>
  </View>
    // <Stack>
    //   {isAuthenticated ? (
    //     // Main application screens
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //   ) : (
    //     // Authentication screens
    //     <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    //   )}
    // </Stack>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      flex: 1.2,
      width: widthscreen
    },
    body: {
      flex: 1,
      width: '100%',
    },
    header: {
      alignItems: "center",
      justifyContent: "flex-start",
      marginVertical: 20
    },
    buttonContainer: {
      width: '100%',
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10
    },
    footer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 40,
  
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 54,
      width: "90%",
      borderRadius: 20,
      backgroundColor: 'transparent',
      borderWidth: 0.2,
    },
    buttonText: {
      alignContent: "center",
      fontFamily: "Poppins-Bold",
      fontSize: 19,
      lineHeight: 27,
      color: '#000',
    }
  });