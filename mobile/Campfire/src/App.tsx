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

enableScreens();

const App = (): ReactNode => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <NavigationContainer
        theme={darkMode ? navigationDarkTheme : navigationTheme}>
        <AppStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
