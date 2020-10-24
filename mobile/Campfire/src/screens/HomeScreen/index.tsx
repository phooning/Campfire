import React from 'react';
import { View, Text } from 'react-native';
import Typography from 'components/Typography';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography type="p">Test</Typography>
    </View>
  );
};

export default HomeScreen;
