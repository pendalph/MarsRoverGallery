import 'iconsax-react-native';
import React from 'react';
import { StatusBar } from 'react-native';

import { AppNavigator } from './router/AppNavigator';
import { StoreProvider, createRootStore } from './store';

const App: React.FC = (): JSX.Element => {
  const store = createRootStore();
  // check .env
  return (
    <StoreProvider store={store}>
      <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
      <AppNavigator />
    </StoreProvider>
  );
};

export default App;
