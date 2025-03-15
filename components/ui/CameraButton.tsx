import { useIsFocused } from "@react-navigation/native";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";

interface CameraButtonProps extends PressableProps {
    color?: string;
    onPress:() => void; // pass from parent
    isFocused: boolean;
}

const CameraButton: React.FC<CameraButtonProps> = ({ color, onPress, isFocused, ...props }) => {
    return (
        <Pressable onPress={onPress} accessibilityState={isFocused ? {selected: true}:{}} {...props}>
            <View style={[styles.container,]}>
                <View style={styles.circle}></View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: 42,
        height: 42,
        backgroundColor: '#fff',
        borderRadius: 21,
    },
});

export default CameraButton;
