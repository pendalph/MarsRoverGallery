import 'iconsax-react-native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import { StoreProvider, createRootStore } from './store';

const App: React.FC = (): JSX.Element => {
  const store = createRootStore();

  return (
    <StoreProvider store={store}>
      <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
      <View>
        <Text>Hello</Text>
        <Text>MARS ROVER GALLERY</Text>
      </View>
    </StoreProvider>
  );
};

export default App;
