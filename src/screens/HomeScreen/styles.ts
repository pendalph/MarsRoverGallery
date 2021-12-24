import { StyleSheet } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '_app/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    height: SCREEN_HEIGHT,
    paddingTop: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    width: SCREEN_WIDTH - 60,
    height: SCREEN_WIDTH - 60,
  },
  image: {
    flex: 1,
    borderRadius: 16,
    paddingBottom: 23,
  },
});
