import React, { ReactElement } from 'react';
import { Pressable, View } from 'react-native';
import Typography from 'components/Typography';
import StatusBar from 'components/StatusBar';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'styles/theme';
import { HomeScreenNavigationProp } from 'stacks/types';

interface IHomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: IHomeScreenProps): ReactElement => {
  const theme = useTheme<Theme>();
  const { isDarkMode } = theme;

  const onPressRegion = () => {
    navigation.navigate('RegionScreen');
  };

  return (
    <>
      <StatusBar isDarkMode={isDarkMode} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable
          onPress={onPressRegion}
          style={{
            backgroundColor: theme.colors.fadedBackground,
            borderRadius: 100,
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography type="p">Test</Typography>
        </Pressable>
      </View>
    </>
  );
};

export default HomeScreen;
