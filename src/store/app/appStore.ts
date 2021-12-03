import { makeAutoObservable } from 'mobx';

import { RootStoreType } from '../RootStore';

export default class AppStore {
  count: number = 0;

  constructor(private rootStore: RootStoreType) {
    makeAutoObservable<AppStore>(this);
  }

  onIncrement = (countNumber: number) => {
    this.count = countNumber;
  };
  onDecrement = (countNumber: number) => {
    this.count = this.count > 0 ? (this.count = countNumber) : 0;
  };
}
