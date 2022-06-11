// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import RegisterCar from './pages/RegisterCar';
import UpdateCar from './pages/UpdateCar';
import ViewAllCar from './pages/ViewAllCar';
import ViewCar from './pages/ViewCar';
import DeleteCar from './pages/DeleteCar';
import RealTimeAddUpdateCar from './pages/ReatTimeAddUpdateCar';
import AddOrderSummary from './pages/AddOrderSummary';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#03A89E', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="RegisterCar"
          component={RegisterCar}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="UpdateCar"
          component={UpdateCar}
          options={{ title: 'Update' }}
        />
        <Stack.Screen
          name="ViewAllCar"
          component={ViewAllCar}
          options={{ title: 'View All' }}
        />
        <Stack.Screen
          name="ViewCar"
          component={ViewCar}
          options={{ title: 'View' }}
        />
        <Stack.Screen
          name="DeleteCar"
          component={DeleteCar}
          options={{ title: 'Delete' }}
        />
        <Stack.Screen
          name="RealTimeAddUpdateCar"
          component={RealTimeAddUpdateCar}
          options={{ title: 'Real Time Updates' }}
        />
        <Stack.Screen
          name="AddOrderSummary"
          component={AddOrderSummary}
          options={{ title: 'Add Order Summary' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
