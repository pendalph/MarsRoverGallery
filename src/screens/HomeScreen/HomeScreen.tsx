import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { SkeletonPhotos } from '_app/components';
import { useStore } from '_app/store';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '_app/utils';

import { styles } from './styles';

const HomeScreen: FC = (): JSX.Element => {
  const {
    appStore: { getPhotos, photos },
  } = useStore();

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {photos.length !== 0 ? (
        photos.map(element => {
          return (
            <FastImage
              key={element.id}
              style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 60 }}
              source={{
                uri: String(element.img_src),
                priority: FastImage.priority.low,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          );
        })
      ) : (
        <View style={styles.loaderContainer}>
          <SkeletonPhotos />
        </View>
      )}
    </SafeAreaView>
  );
};

export default observer(HomeScreen);
