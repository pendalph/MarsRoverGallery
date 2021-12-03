import React, { createContext, useContext } from 'react';

import { RootStoreType } from '_app/store';

interface StoreProviderProps {
  store: RootStoreType;
}

const StoreContext = createContext<RootStoreType>(undefined!);

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, store }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = (): RootStoreType => {
  return useContext(StoreContext);
};
