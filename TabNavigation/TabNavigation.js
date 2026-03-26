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
          animation: 'shift',
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
          tabBarActiveTintColor: '#0F172A',
          tabBarInactiveTintColor: '#64748B',
          tabBarShowLabel: false,

          // 💅 Styling
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            backgroundColor: '#F8FAFC',
            borderRadius: 16,
            height: 68,
            borderWidth: 1,
            borderColor: '#E2E8F0',
            paddingHorizontal: 6,
            paddingTop: 4,
          },

          tabBarItemStyle: {
            paddingVertical: 7,
          },
          tabBarButton: props => (
            <Pressable
              {...props}
              android_ripple={{ color: 'transparent' }}
              style={props.style}
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
    minWidth: 112,
    height: 40,
    borderRadius: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2E8F0',
    gap: 6,
  },
  activeLabel: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '600',
  },
});