import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import CameraButton from './CameraButton';

const { width } = Dimensions.get('window');

type IconProps = {
  color: string;
};

const Union = () => (
  <Svg width={width} height={100} viewBox="0 0 231 79" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M75.8565 21.2366C82.2136 21.2366 87.5194 16.6656 91.4206 11.6463C96.901 4.59498 105.868 0 116 0C126.132 0 135.099 4.59499 140.58 11.6463C144.481 16.6656 149.787 21.2366 156.144 21.2366H202.194C218.103 21.2366 231 34.1333 231 50.0421C231 66.0351 218.035 79 202.042 79H28.032C12.5504 79 0 66.4496 0 50.968C0 34.5478 13.3112 21.2366 29.7314 21.2366H75.8565Z"
      fill="black"
    />
  </Svg>
);

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const icons: Record<string, React.FC<IconProps>> = {
    index: (props) => <Feather name="home" size={24} {...props} />,
    camera: (props) => <CameraButton onPress={()=> navigation.navigate('camera')}
    isFocused={state.index === 1} {...props} />,
    explore: (props) => <Feather name="user" size={24} {...props} />,
  };

  return (
    <View style={styles.tabBarContainer}>
      {/* SVG Background */}
      <Union />
      {/* Navigation Items */}
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <PlatformPressable
              key={route.key}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              style={[styles.tabBarItem,
                route.name == 'index' && styles.homeItem,
                route.name == 'explore' && styles.exploreItem,
                route.name == 'camera' && styles.cameraItem,
              ]}
            >
              {icons[route.name]?.({ color: isFocused ? colors.primary : colors.text })}
              {route.name !== 'camera' &&(
                <Text style={{ color: isFocused ? colors.primary : colors.text }}>{label}</Text>
              )}
             
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    height: 100, // Adjust as per your SVG's height
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 25,
  },
  tabBar: {
    ...StyleSheet.absoluteFillObject, // Ensures the items sit above the background
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeItem: {
    position: 'fixed',
    top:10,
    left: 10,
  },
  exploreItem: {
    position: 'fixed',
    top:10,
    right: 10,
  },
  cameraItem:{
    position:'fixed',
    top:-10
  }
});

export default TabBar;
