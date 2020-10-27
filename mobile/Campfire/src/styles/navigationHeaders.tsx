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

export const HeaderLeftBack = React.memo<{ navigation: any }>(
  ({ navigation }) => {
    const theme = useTheme<Theme>();
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
  return {
    headerLeft: () => (
      <Icon
        marginHorizontal="m"
        iconProps={{
          onPress: () => navigation.openDrawer(),
          name: 'menu',
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
          name: 'chat',
        }}
      />
    ),
  };
};

export const ChatScreenOptions = ({
  navigation,
  route,
}: IScreenProps): StackNavigationOptions => {
  return {
    headerLeft: () => <HeaderLeftBack navigation={navigation} />,
    headerTitle: 'Direct Messages',
  };
};

export const SettingsScreenOptions = ({
  navigation,
  route,
}: IScreenProps): StackNavigationOptions => {
  return {
    headerLeft: () => <HeaderLeftBack navigation={navigation} />,
    headerTitle: 'Settings',
  };
};
