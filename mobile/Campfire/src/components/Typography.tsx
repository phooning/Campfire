import React, { ReactElement, ReactNode } from 'react';
import { Text } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'styles/theme';

interface ITypographyProps {
  type: 'p' | 't';
  children: ReactNode;
}

const Typography = ({ type, children }: ITypographyProps): ReactElement => {
  const theme = useTheme<Theme>();

  const getTextProps = () => {
    switch (type) {
      case 'p':
        return {
          style: [
            {
              color: 'white',
            },
          ],
        };
      case 't':
        return {
          style: [
            {
              color: theme.colors.faded,
              fontWeight: 'bold',
            },
          ],
        };
      default:
        return {};
    }
  };
  return <Text {...getTextProps()}>{children}</Text>;
};

export default Typography;
