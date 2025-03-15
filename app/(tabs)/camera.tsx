import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from 'react-native-svg';

interface CameraButtonProps extends PressableProps {
    color?: string;
}

const Union = () => (
    <Svg width={200} height={100} viewBox="0 0 231 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.8565 21.2366C82.2136 21.2366 87.5194 16.6656 91.4206 11.6463C96.901 4.59498 105.868 0 116 0C126.132 0 135.099 4.59499 140.58 11.6463C144.481 16.6656 149.787 21.2366 156.144 21.2366H202.194C218.103 21.2366 231 34.1333 231 50.0421C231 66.0351 218.035 79 202.042 79H28.032C12.5504 79 0 66.4496 0 50.968C0 34.5478 13.3112 21.2366 29.7314 21.2366H75.8565Z"
        fill="black"
      />
    </Svg>
  );

const Camera: React.FC<CameraButtonProps> = () => {
      return (
        <SafeAreaView>
            <Union width={200} height={100} />
          <Pressable >
              <View style={[styles.container,]}>
                  <View style={styles.circle}></View>
              </View>
          </Pressable>
          </SafeAreaView>
      );
}

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

export default Camera;