import React, { ReactElement } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import Typography from 'components/Typography';

const TestData = [
  {
    key: 'a1',
    name: 'Campfire 1',
  },
];

const styles = StyleSheet.create({
  renderItemStyle: {
    backgroundColor: 'red',
    padding: 16,
  },
});

interface IRegionScreenProps {
  navigation: any;
}

const RegionScreen = ({ navigation }): ReactElement => {
  const renderItem = ({ item, index }) => {
    console.log('item', item);

    const onPressCampfire = () => {
      navigation.navigate('CampfireScreen');
    };

    return (
      <Pressable onPress={onPressCampfire} style={styles.renderItemStyle}>
        <Typography type="p">{item.name}</Typography>
      </Pressable>
    );
  };

  const keyExtractor = (item: { key: string }) => item.key;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={TestData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default RegionScreen;
