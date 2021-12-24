import { makeAutoObservable, runInAction } from 'mobx';

import { http } from '_app/services/http';
import { API_KEY } from '_env';

import { TData, TPhotos } from './types';

export default class AppStore {
  count: number = 0;
  isLoading: boolean = false;
  isLoadingError: boolean = false;
  photos: Array<TPhotos> = [];

  constructor() {
    makeAutoObservable<AppStore>(this);
  }

  getPhotos = async (page: number): Promise<void> => {
    this.isLoading = true;
    console.log('called');
    try {
      const { data } = await http.get<TData>(
        `mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-12-17&camera=${'FHAZ'}&&page=${page}&api_key=${API_KEY}`,
      );
      runInAction(() => {
        this.photos = data.photos;

        this.isLoading = false;
        this.isLoadingError = false;
      });
    } catch (err) {
      console.log(err);
      runInAction(() => {
        this.isLoading = false;
        this.isLoadingError = true;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
        this.isLoadingError = true;
      });
    }
  };
}
