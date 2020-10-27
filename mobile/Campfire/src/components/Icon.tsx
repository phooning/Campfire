import React, { ReactElement } from 'react';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import { IconProps } from 'react-native-vector-icons/Icon';
import {
  BackgroundColorProps,
  createRestyleComponent,
  createRestyleFunction,
  createVariant,
  LayoutProps,
  SpacingProps,
  useTheme,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from 'styles/theme';
import { Box } from 'components/common';

type IconVariantProps = VariantProps<Theme, 'iconVariants'> & IconProps;

type IIconProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> & {
    iconProps: IconProps & IconVariantProps;
  };

const Icon = ({ iconProps, ...rest }: IIconProps): ReactElement => {
  const theme = useTheme<Theme>();
  const defaultIconProps = {
    size: theme.iconVariants.header.size,
    color: theme.colors.faded,
  };
  return (
    <Box {...rest}>
      <VectorIcon {...defaultIconProps} {...iconProps} />
    </Box>
  );
};

export default Icon;
