import React, { ReactElement, useRef } from 'react';
import { Box } from 'components/common';
import { TextInput, TextInputProps, useWindowDimensions } from 'react-native';
import Icon from 'components/Icon';
import { Theme } from 'styles/theme';
import { useTheme } from '@shopify/restyle';

type ISearchInputProps = TextInputProps;

const SearchInput = ({ ...rest }: ISearchInputProps): ReactElement => {
  const inputRef = useRef<TextInput>(null);
  const theme = useTheme<Theme>();
  return (
    <Box
      onTouchEnd={() => inputRef.current?.focus()}
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      borderRadius={10}
      backgroundColor="fadedBackground">
      <Icon
        margin="s"
        iconProps={{
          size: theme.iconVariants.header.size,
          name: 'search',
          color: theme.colors.faded,
        }}
      />
      <TextInput
        ref={inputRef}
        returnKeyType="search"
        placeholder="Search"
        placeholderTextColor={theme.colors.faded}
        autoCapitalize="none"
        blurOnSubmit
        clearButtonMode="while-editing"
        {...rest}
      />
    </Box>
  );
};

export default SearchInput;
