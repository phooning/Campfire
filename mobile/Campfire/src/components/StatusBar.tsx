import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';

interface IStatusBarProps {
  isDarkMode: boolean;
}

const StatusBar = React.memo<IStatusBarProps>(({ isDarkMode }) => {
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';
  return <RNStatusBar barStyle={barStyle} />;
});

export default StatusBar;
