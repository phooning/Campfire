import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from 'react-native-vector-icons/Icon';
import { spacing, SpacingProps, useRestyle } from '@shopify/restyle';
import { Theme } from 'styles/theme';

type IIconProps = SpacingProps<Theme> &
  IconProps & {
    viewProps: StyleProp<ViewStyle>;
  };

const restyleFunctions = [spacing];

const Icon = ({ viewProps, ...rest }: IIconProps): ReactNode => {
  const props = useRestyle(restyleFunctions, { viewProps });
  return (
    <View {...props}>
      <VectorIcon {...rest} />
    </View>
  );
};

export default Icon;
