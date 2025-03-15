import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import background from "../assets/images/bachground/Onboarding_3_cover.png";
import { Paginator } from '@/components/ui/Paginator';
import ButtonOboarding from '@/components/ui/Button';
import logo from "../assets/images/Logo/Logo.png";
import { useNavigation } from 'expo-router';

export default function OnboardingScreen3({ onComplete }) {
    const navigation = useNavigation();
    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //   <Text>Step 3: You're ready to start!</Text>
        //   <Button title="Finish" onPress={onComplete} />
        // </View>
        <View style={styles.container_view}>
            <ImageBackground source={background} resizeMode="cover" style={styles.background_image}>
                <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.8)']} style={[styles.gradient]}>
                    <SafeAreaView style={styles.background_view}>
                        <Image source={logo} resizeMode="cover" style={styles.logo_image}></Image>
                        <Text style={styles.title_text}>Let's cook with RecipeLens!</Text>
                        <Text style={styles.body_text}>Choose your favorite recipe </Text>
                        <Text style={[styles.body_text, { marginBottom: 40 }]}>RecipeLens is ready!</Text>
                        {/* onPress={onComplete} */}
                        <ButtonOboarding title="Get started" onPress={onComplete}></ButtonOboarding>
                        <Paginator PageOrder={2}></Paginator>
                    </SafeAreaView>
                </LinearGradient>
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
    gradient: {
        // flexWrap: "wrap",
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',

    },
    background_view: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo_image: {
        width: 200,
        height: 200,
        marginBottom: 18,
    },
    title_text: {
        marginBottom: 13,
        alignContent: "center",
        fontFamily: "Raleway-Bold",
        fontSize: 28,
        lineHeight: 39,
        color: "#FFF",
    },
    body_text: {
        alignContent: "center",
        fontFamily: "Raleway-Regular",
        fontSize: 16,
        lineHeight: 22,
        color: "#FFFEFE",
    },
})