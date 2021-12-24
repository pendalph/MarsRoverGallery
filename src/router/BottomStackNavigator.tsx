import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ArchiveAdd, Calendar2, Home, Setting3 } from 'iconsax-react-native';
import React, { FC } from 'react';
import { View } from 'react-native';

import { mainDarkColor, mainLightColor } from '_app/constants';
import { EventsScreen } from '_app/screens/EventsScreen/EventsScreen';
import { FavoritesScreen } from '_app/screens/FavoritesScreen/FavoritesScreen';
import HomeScreen from '_app/screens/HomeScreen/HomeScreen';
import { SettingsScreen } from '_app/screens/SettingsScreen/SettingsScreen';

import { styles } from './styles';

const Tab = createBottomTabNavigator();

export const BottomStackNavigator: FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: mainDarkColor,
          height: 90,
          justifyContent: 'center',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: mainLightColor,
        tabBarInactiveTintColor: mainLightColor,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={focused ? styles.activeContainer : null}>
                <Home variant="Linear" size={34} color={color} />
              </View>
            );
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={focused ? styles.activeContainer : null}>
                <ArchiveAdd variant="Linear" size={34} color={color} />
              </View>
            );
          },
        }}
        name="FavoritesScreen"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={focused ? styles.activeContainer : null}>
                <Setting3 variant="Linear" size={34} color={color} />
              </View>
            );
          },
        }}
        name="EventsScreen"
        component={EventsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <View style={focused ? styles.activeContainer : null}>
                <Calendar2 variant="Linear" size={34} color={color} />
              </View>
            );
          },
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
