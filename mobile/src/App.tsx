import 'react-native-gesture-handler';
import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { ThemeProvider } from '@shopify/restyle';
import HomeScreen from 'screens/HomeScreen';
import Theme from 'styles/theme';

enableScreens();
const RootStack = createNativeStackNavigator();

const App = (): ReactNode => {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
