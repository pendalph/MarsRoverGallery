import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { SkeletonPhotos } from '_app/components';
import { useStore } from '_app/store';
import { TPhotos } from '_app/store/app/types';

import { styles } from './styles';

const HomeScreen: FC = (): JSX.Element => {
  const {
    appStore: { getPhotos, photos, isLoading },
  } = useStore();

  useEffect(() => {
    getMartianPhotos();
  }, []);

  const getMartianPhotos = () => {
    getPhotos(1);
  };

  const renderItem = ({ item }: { index: number; item: TPhotos }) => {
    return (
      <View style={styles.imageContainer}>
        <FastImage
          key={item.id}
          style={styles.image}
          source={{
            uri: String(item.img_src),
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={getMartianPhotos}
        ListEmptyComponent={
          <View style={styles.loaderContainer}>
            <SkeletonPhotos />
          </View>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
