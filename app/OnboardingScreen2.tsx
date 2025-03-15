import React from 'react';
import { View, Text, ImageBackground,StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../assets/images/bachground/Onboarding_2_cover.png";
import { Paginator } from '@/components/ui/Paginator';
export default function OnboardingScreen2({ onNext }) {
  return (
    <View style={styles.container_view}>
        <ImageBackground source={background} resizeMode='cover' style={styles.background_image}>
            <SafeAreaView style={styles.upper_background_view}>
                <Text style={styles.title_text}>Diverse proposals</Text>
                <Text style={styles.body_text}>Fast - Nutritious - Convenient </Text>
                <Text style={styles.body_text}>Whatever you need, RecipeLens has it all</Text>
            </SafeAreaView>
            <View style={{height:150}}>
            <SafeAreaView style={styles.lower_background_view}>
                <View style={styles.text_view}>
                    <Text  style={styles.skip_text}>Skip</Text>
                    <Text onPress={onNext} style={styles.next_text}>Continue</Text>
                </View>
                <View style={styles.paginator_view}>
                    <Paginator PageOrder={1}></Paginator>
                </View>
            </SafeAreaView>
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
        flexWrap: "wrap",
    },
    text_view: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "baseline",
    },
    skip_text: {
        paddingLeft: 37,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        lineHeight: 25,
        color: "#FFF",
    },
    next_text: {
        paddingRight: 37,
        fontFamily: "Poppins-Bold",
        fontSize: 18,
        lineHeight: 25,
        color: "#00D03A",
    },
    paginator_view: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
})