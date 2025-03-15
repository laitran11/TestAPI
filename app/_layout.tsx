import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { Slot } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import OnboardingScreen0 from './OnboardingScreen0';
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [onboardingStep, setOnboardingStep] = useState(0);
  const { getItem, setItem } = useAsyncStorage('onboardingStep');

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      // Reset onboarding step each time the app starts (force onboarding on rebuild)
      await setItem('0'); // Force onboarding to always start at step 0

      // Optionally, you can skip this part if you want to clear only on rebuild
      const step = await getItem();
      if (step) {
        setOnboardingStep(parseInt(step, 10)); // Set current step from AsyncStorage
      }
    };

    checkOnboardingStatus();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const handleNext = async () => {
    const nextStep = onboardingStep + 1;
    await setItem(nextStep.toString()); // Store the next step in AsyncStorage
    setOnboardingStep(nextStep); // Update the state
  };

  const handleOnboardingComplete = async () => {
    await setItem('3'); // Set to 3 when onboarding is completed
    setOnboardingStep(4); // Set final step
  };

  if (!loaded) {
    return null;
  }

  // Handling the onboarding flow before returning the main app (tabs screen)
  if (onboardingStep === 0) {
    return <OnboardingScreen0 onNext={handleNext} />;
  }
  if (onboardingStep === 1) {
    return <OnboardingScreen1 onNext={handleNext} />;
  }

  if (onboardingStep === 2) {
    return <OnboardingScreen2 onNext={handleNext} />;
  }

  if (onboardingStep === 3) {
    return <OnboardingScreen3 onComplete={handleOnboardingComplete} />;
  }

  // Once onboarding is completed, render the main app (tabs screen)
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" /> */}
      <Slot/>
    </ThemeProvider>
  );
}
