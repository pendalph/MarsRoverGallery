import { StyleSheet } from 'react-native';

import { SCREEN_HEIGHT } from '_app/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    height: SCREEN_HEIGHT,
    paddingTop: 20,
  },
});
