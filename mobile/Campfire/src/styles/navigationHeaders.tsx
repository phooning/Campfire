import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import SearchInput from 'components/SearchInput';
import Icon from 'components/Icon';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'styles/theme';

type IScreenProps = {
  navigation: unknown;
  route: unknown;
};

export const HeaderLeftBack = React.memo<{ navigation: any; theme: Theme }>(
  ({ navigation, theme }) => {
    return (
      <Icon
        marginHorizontal="m"
        iconProps={{
          onPress: () => navigation.goBack(),
          size: theme.iconVariants.header.size,
          name: 'arrow-back-ios',
          color: theme.colors.faded,
        }}
      />
    );
  },
);

export const HomeScreenOptions = ({
  navigation,
  route,
}: IScreenProps): StackNavigationOptions => {
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
          onPress: () => navigation.navigate('ChatScreen'),
          size: theme.iconVariants.header.size,
          name: 'chat',
          color: theme.colors.faded,
        }}
      />
    ),
  };
};

export const ChatScreenOptions = ({
  navigation,
  route,
}: IScreenProps): StackNavigationOptions => {
  const theme = useTheme<Theme>();
  return {
    headerLeft: () => <HeaderLeftBack navigation={navigation} theme={theme} />,
    headerTitle: 'Direct Messages',
  };
};

export const SettingsScreenOptions = ({
  navigation,
  route,
}: IScreenProps): StackNavigationOptions => {
  const theme = useTheme<Theme>();
  return {
    headerLeft: () => <HeaderLeftBack navigation={navigation} theme={theme} />,
    headerTitle: 'Settings',
  };
};
