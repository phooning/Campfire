import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import SearchInput from 'components/SearchInput';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from 'stacks/types';
import { NativeStackNavigationOptions } from 'react-native-screens/native-stack';

type IHomeScreenOptionsProps = {
  navigation: unknown;
  route: unknown;
};

export const HomeScreenOptions = ({
  navigation,
  route,
}: IHomeScreenOptionsProps): StackNavigationOptions => {
  return {
    headerTitle: () => (
      <SearchInput
        onChangeText={(text) => {}}
        onBlur={(event) => {}}
        onSubmitEditing={(event) => {}}
      />
    ),
  };
};
