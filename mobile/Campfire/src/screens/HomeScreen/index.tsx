import React, { ReactElement } from 'react';
import { View } from 'react-native';
import Typography from 'components/Typography';
import StatusBar from 'components/StatusBar';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'styles/theme';

const HomeScreen = (): ReactElement => {
  const theme = useTheme<Theme>();
  const { isDarkMode } = theme;
  return (
    <>
      <StatusBar isDarkMode={isDarkMode} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Typography type="p">Test</Typography>
      </View>
    </>
  );
};

export default HomeScreen;
