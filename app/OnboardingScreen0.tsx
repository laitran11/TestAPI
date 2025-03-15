
import React, { useCallback } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import background from '../assets/images/bachground/Onboarding_0_cover.png';
import logo from '../assets/images/Logo/Logo.png';
import ButtonOboarding from '@/components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from 'expo-router';
SplashScreen.preventAutoHideAsync();

export default function OnboardingScreen0({ onNext }) {
const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'ProtestRiot-Regular': require('../assets/fonts/ProtestRiot-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground source={background} resizeMode='cover' style={styles.background_image}>
        <SafeAreaView style={styles.upper_background_view}>
          <Image source={logo} resizeMode='cover' style={styles.logo_image} />
          <Text style={styles.sloganText}>Cook smart</Text>
          <Text style={styles.sloganText}>Taste great</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.lower_background_view}>
          <ButtonOboarding title="Learn more" onPress={onNext} />
          <Pressable>
            <Text style={styles.startNow_text}>
              Or get started now with RecipeLens <AntDesign name="arrowright" size={20} color="white" />
            </Text>
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background_image: {
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  upper_background_view: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  logo_image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  sloganText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
    marginTop: 20,
    marginBottom:-20,
    fontFamily: 'ProtestRiot-Regular',
  },
  lower_background_view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  startNow_text: {
    marginTop: '3%',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
  },
});
