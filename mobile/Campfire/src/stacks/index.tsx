import HomeScreen from 'screens/HomeScreen';
import { HomeScreenOptions } from 'styles/navigationHeaders';
import { NavigationContainer } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeftDrawer from 'screens/LeftDrawer';

const HomeStacker = createStackNavigator();

const HomeStack = (): ReactElement => {
  return (
    <HomeStacker.Navigator>
      <HomeStacker.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={HomeScreenOptions}
      />
    </HomeStacker.Navigator>
  );
};

const RootStacker = createDrawerNavigator();

const AppStack = (): ReactElement => {
  return (
    <RootStacker.Navigator drawerType="slide" initialRouteName="HomeStack">
      <RootStacker.Screen name="HomeStack" component={HomeStack} options={{}} />
      <RootStacker.Screen
        name="LeftDrawer"
        component={LeftDrawer}
        options={{}}
      />
    </RootStacker.Navigator>
  );
};

export default AppStack;
