import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';

import { BottomStackNavigator } from './BottomStackNavigator';

const Stack = createNativeStackNavigator();

export const AppNavigator: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomStackNavigator">
        <Stack.Screen options={{ headerShown: false }} name="BottomStackNavigator" component={BottomStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
