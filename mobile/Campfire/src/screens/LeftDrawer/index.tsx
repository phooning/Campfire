import React, { ReactElement } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'components/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'components/common';
import Typography from 'components/Typography';

const styles = StyleSheet.create({
  iconWrapper: {
    right: 0,
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const LeftDrawer = ({
  progress,
  state,
  navigation,
  descriptors,
}: DrawerContentComponentProps): ReactElement => {
  return (
    <>
      <DrawerContentScrollView
        progress={progress}
        state={state}
        navigation={navigation}
        descriptors={descriptors}></DrawerContentScrollView>
      <SafeAreaView style={{ flex: 1 }} mode="margin" edges={['bottom']}>
          <View style={styles.iconWrapper}>
            <Typography type="t">Settings</Typography>
            <Icon
              marginHorizontal="m"
              iconProps={{
                onPress: () => {},
                name: 'settings',
              }}
            />
          </View>
      </SafeAreaView>
    </>
  );
};

export default LeftDrawer;
