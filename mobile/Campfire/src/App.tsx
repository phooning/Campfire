import 'react-native-gesture-handler';
import React, { ReactNode, useState } from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';
import HomeScreen from 'screens/HomeScreen';
import theme, {
  darkTheme,
  navigationDarkTheme,
  navigationTheme,
} from 'styles/theme';

enableScreens();
const RootStack = createNativeStackNavigator();

const App = (): ReactNode => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <NavigationContainer
        theme={darkMode ? navigationDarkTheme : navigationTheme}>
        <RootStack.Navigator>
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
