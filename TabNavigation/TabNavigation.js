import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Icons
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../Pages/HomeScreen';
import ProfileScreen from '../Pages/ProfileScreen';
import SettingsScreen from '../Pages/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          animation: 'fade',
          tabBarHideOnKeyboard: true,

          // Professional style: active capsule with label
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            if (focused) {
              return (
                <View style={styles.activePill}>
                  <Icon name={iconName} size={20} color="#0F172A" />
                  <Text style={styles.activeLabel}>{route.name}</Text>
                </View>
              );
            }

            return <Icon name={iconName} size={22} color={color} />;
          },

          // 🎨 Colors
          tabBarActiveTintColor: '#0B1220',
          tabBarInactiveTintColor: '#667085',
          tabBarShowLabel: false,

          // 💅 Styling
          tabBarStyle: {
            position: 'absolute',
            bottom: 14,
            left: 12,
            right: 12,
            backgroundColor: '#F8FAFC',
            borderRadius: 18,
            height: 70,
            borderWidth: 1,
            borderColor: '#E4E7EC',
            paddingHorizontal: 8,
            paddingTop: 6,
          },

          tabBarItemStyle: {
            paddingVertical: 6,
          },
          tabBarButton: props => (
            <Pressable
              {...props}
              android_ripple={{ color: 'transparent' }}
              style={({ pressed }) => [
                props.style,
                pressed && styles.pressedTabButton,
              ]}
            />
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  activePill: {
    minWidth: 116,
    height: 42,
    borderRadius: 16,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9EEF5',
    borderWidth: 1,
    borderColor: '#D8DFEA',
    gap: 7,
  },
  activeLabel: {
    color: '#0B1220',
    fontSize: 13,
    fontWeight: '600',
  },
  pressedTabButton: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});