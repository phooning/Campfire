import HomeScreen from 'screens/HomeScreen';
import {ChatScreenOptions, HomeScreenOptions} from 'styles/navigationHeaders';
import { NavigationContainer } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeftDrawer from 'screens/LeftDrawer';
import ChatScreen from "screens/ChatScreen";
import SettingsScreen from "screens/SettingsScreen";

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

const RootStacker = createDrawerNavigator();

const AppStack = (): ReactElement => {
  return (
    <RootStacker.Navigator drawerType="slide" initialRouteName="HomeStack">
      <RootStacker.Screen name="HomeStack" component={HomeStack} options={{}} />
      <RootStacker.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{}}
      />
    </RootStacker.Navigator>
  );
};

export default AppStack;
