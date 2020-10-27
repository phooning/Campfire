import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import SearchInput from 'components/SearchInput';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from 'stacks/types';
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';
import Icon from 'components/Icon';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'styles/theme';

type IHomeScreenOptionsProps = {
  navigation: unknown;
  route: unknown;
};

export const HomeScreenOptions = ({
  navigation,
  route,
}: IHomeScreenOptionsProps): StackNavigationOptions => {
  const theme = useTheme<Theme>();
  return {
    headerLeft: () => (
      <Icon
        marginHorizontal="m"
        iconProps={{
          onPress: () => navigation.openDrawer(),
          size: theme.iconVariants.header.size,
          name: 'menu',
          color: theme.colors.faded,
        }}
      />
    ),
    headerTitle: () => (
      <SearchInput
        onChangeText={(text) => {}}
        onBlur={(event) => {}}
        onSubmitEditing={(event) => {}}
      />
    ),
    headerTitleContainerStyle: {
      flex: 1,
    },
    headerRight: () => (
      <Icon
        marginHorizontal="m"
        iconProps={{
          onPress: () => console.log("pressed"),
          size: theme.iconVariants.header.size,
          name: 'chat',
          color: theme.colors.faded,
        }}
      />
    ),
  };
};
