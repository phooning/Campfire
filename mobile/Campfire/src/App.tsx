import 'react-native-gesture-handler';
import React, { ReactNode, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from '@shopify/restyle';
import HomeScreen from 'screens/HomeScreen';
import theme, {
  darkTheme,
  navigationDarkTheme,
  navigationTheme,
} from 'styles/theme';
import { HomeScreenOptions } from 'styles/navigationHeaders';
import { createStackNavigator } from '@react-navigation/stack';

enableScreens();
const RootStack = createStackNavigator();

const App = (): ReactNode => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <NavigationContainer
        theme={darkMode ? navigationDarkTheme : navigationTheme}>
        <RootStack.Navigator>
          <RootStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={HomeScreenOptions}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
