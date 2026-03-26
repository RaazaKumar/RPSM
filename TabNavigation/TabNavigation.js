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

          // GIF style: active pill with label, inactive icon only
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
                  <Icon name={iconName} size={22} color="#111827" />
                  <Text style={styles.activeLabel}>{route.name}</Text>
                </View>
              );
            }

            return <Icon name={iconName} size={24} color={color} />;
          },

          // 🎨 Colors
          tabBarActiveTintColor: '#111827',
          tabBarInactiveTintColor: '#6B7280',
          tabBarShowLabel: false,

          // 💅 Styling
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            backgroundColor: '#fff',
            borderRadius: 12,
            height: 64,
          },

          tabBarItemStyle: {
            paddingVertical: 8,
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
    minWidth: 120,
    height: 42,
    borderRadius: 21,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E7EB',
    gap: 8,
  },
  activeLabel: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
});