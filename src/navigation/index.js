import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from '../features/onboarding/landing/landing.screen';
import Login from '../features/onboarding/login/login.screen';
import Connexion from '../features/onboarding/connexion/connexion.screen';
import Confirmation from '../features/onboarding/confirmation/confirmation.screen';

const Stack = createNativeStackNavigator();

const rootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="connexion" component={Connexion} />
        <Stack.Screen name="confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default rootContainer;
