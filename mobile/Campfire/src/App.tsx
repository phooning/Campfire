import 'react-native-gesture-handler';
import React, { ReactNode, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from '@shopify/restyle';
import theme, {
  darkTheme,
  navigationDarkTheme,
  navigationTheme,
} from 'styles/theme';
import AppStack from 'stacks';
import { SafeAreaProvider } from 'react-native-safe-area-context';

enableScreens();

const App = (): ReactNode => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <NavigationContainer
          theme={darkMode ? navigationDarkTheme : navigationTheme}>
          <AppStack />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
