import React, { ReactElement } from 'react';
import { Box } from 'components/common';
import { TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ISearchInputProps = TextInputProps;

const SearchInput = ({ ...rest }: ISearchInputProps): ReactElement => {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="center">
      <Icon name="search" color="red" />
      <TextInput
        returnKeyType="search"
        placeholder="Search"
        autoCapitalize="none"
        blurOnSubmit
        clearButtonMode="while-editing"
        {...rest}
      />
    </Box>
  );
};

export default SearchInput;
