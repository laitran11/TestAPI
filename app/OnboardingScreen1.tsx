
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../assets/images/bachground/Onboarding_1_cover.png";
import { Paginator } from '@/components/ui/Paginator';

export default function OnboardingScreen1({ onNext }) {
  return (
    <View style={styles.container_view}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background_image}>
        <SafeAreaView style={styles.upper_background_view}>
          <Text style={styles.title_text}>Easy identification</Text>
          <Text style={styles.body_text}>Quickly import all ingredients</Text>
          <Text style={styles.body_text}>in just a few seconds</Text>
        </SafeAreaView>
        <View style={{height:150}}>
          <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} style={styles.gradient}>
          <SafeAreaView style={styles.lower_background_view}>
            <View style={styles.text_view}>
              <Text style={styles.skip_text}>Skip</Text>
              <Text style={styles.next_text} onPress={onNext}>
                Continue
              </Text>
            </View>
            <View style={styles.paginator_view}>
              <Paginator PageOrder={0} />
            </View>
            </SafeAreaView>
          </LinearGradient>
          </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container_view: {
    flex: 1,
    justifyContent: "center",
  },
  background_image: {
    flex: 1,
    backgroundColor: "black",
    shadowColor: "black",
  },
  upper_background_view: {
    flex: 9,
    alignItems: "center",
  },
  title_text: {
    marginTop: 16,
    marginBottom: 17,
    fontFamily: "Poppins-SemiBold",
    fontSize: 27,
    lineHeight: 38,
    color: "#FFF",
  },
  body_text: {
    alignContent: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    lineHeight: 22,
    color: "#FFF",
  },
  lower_background_view: {
    flex: 1,
    justifyContent: "flex-end",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  text_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 37,
    marginBottom: 20, // Adjust spacing from the bottom
  },
  skip_text: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    lineHeight: 25,
    color: "#FFF",
  },
  next_text: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    lineHeight: 25,
    color: "#00D03A",
  },
  paginator_view: {
    alignItems: "center",
    marginBottom: -10, // Adjust spacing from the bottom
  },
});
