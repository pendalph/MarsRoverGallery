import { runInAction } from 'mobx';

import AppStore from './app';
import { configureStore } from './configureStore';

class RootStore {
  appStore: AppStore;

  constructor() {
    this.appStore = new AppStore(this);
  }
}

export function createRootStore(): RootStore {
  configureStore();

  return runInAction(() => {
    return new RootStore();
  });
}

export type RootStoreType = InstanceType<typeof RootStore>;
