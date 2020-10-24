import React, { ReactElement, ReactNode } from 'react';
import { Text } from 'react-native';

interface ITypographyProps {
  type: 'p';
  children: ReactNode;
}

const Typography = ({ type, children }: ITypographyProps): ReactElement => {
  const getTextProps = () => {
    switch (type) {
      case 'p':
        return {
          style: [
            {
              color: 'blue',
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
