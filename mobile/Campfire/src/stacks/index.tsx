import HomeScreen from 'screens/HomeScreen';
import {
  CampfireScreenOptions,
  ChatScreenOptions,
  HomeScreenOptions,
  RegionScreenOptions,
  SettingsScreenOptions,
} from 'styles/navigationHeaders';
import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeftDrawer from 'screens/LeftDrawer';
import ChatScreen from 'screens/ChatScreen';
import SettingsScreen from 'screens/SettingsScreen';
import RegionScreen from 'screens/RegionScreen';
import CampfireScreen from "screens/CampfireScreen";

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
      <HomeStacker.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={SettingsScreenOptions}
      />
      <HomeStacker.Screen
        name="RegionScreen"
        component={RegionScreen}
        options={RegionScreenOptions}
      />
      <HomeStacker.Screen
        name="CampfireScreen"
        component={CampfireScreen}
        options={CampfireScreenOptions}
      />
    </HomeStacker.Navigator>
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
    </RootStacker.Navigator>
  );
};

export default AppStack;
