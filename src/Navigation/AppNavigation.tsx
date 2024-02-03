import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screen/AuthScreen/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Screen/AuthScreen/Signup';
import Homesreen from '../Screen/Main/Homescree';
import CsvContent from '../Screen/Main/CsvContent';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="homescreen">
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="homescreen"
        component={Homesreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="csvcontent"
        component={CsvContent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
