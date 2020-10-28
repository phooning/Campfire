import React, { ReactElement } from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'components/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View} from 'react-native';
import Typography from 'components/Typography';

const styles = StyleSheet.create({
  iconWrapper: {
    right: 0,
    bottom: 0,
    padding: 8,
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
        descriptors={descriptors}>

      </DrawerContentScrollView>
      <SafeAreaView style={{ flex: 1 }} mode="margin" edges={['bottom']}>
        <Pressable
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.iconWrapper}>
          <Typography type="t">Settings</Typography>
          <Icon
            marginRight="m"
            marginLeft="s"
            iconProps={{
              onPress: () => {},
              name: 'settings',
            }}
          />
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default LeftDrawer;
