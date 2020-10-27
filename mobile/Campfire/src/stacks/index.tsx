import HomeScreen from 'screens/HomeScreen';
import {
  ChatScreenOptions,
  HomeScreenOptions,
  SettingsScreenOptions,
} from 'styles/navigationHeaders';
import { NavigationContainer } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeftDrawer from 'screens/LeftDrawer';
import ChatScreen from 'screens/ChatScreen';
import SettingsScreen from 'screens/SettingsScreen';

const HomeStacker = createStackNavigator();
const HomeStack = (): ReactElement => {
  return (
    <HomeStacker.Navigator>
      <HomeStacker.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={HomeScreenOptions}
      />
      <HomeStacker.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={ChatScreenOptions}
      />
    </HomeStacker.Navigator>
  );
};

const SettingsStacker = createStackNavigator();
const SettingsStack = (): ReactElement => {
  return (
    <SettingsStacker.Navigator>
      <SettingsStacker.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={SettingsScreenOptions}
      />
    </SettingsStacker.Navigator>
  );
};

const RootStacker = createDrawerNavigator();

const AppStack = (): ReactElement => {
  return (
    <RootStacker.Navigator
      drawerType="slide"
      drawerContent={LeftDrawer}
      initialRouteName="HomeStack">
      <RootStacker.Screen name="HomeStack" component={HomeStack} />
      <RootStacker.Screen name="SettingsStack" component={SettingsStack} />
    </RootStacker.Navigator>
  );
};

export default AppStack;
