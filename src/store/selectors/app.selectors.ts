import { TStore } from '../index';

export const selectMenuVisibility = (store: TStore): boolean => store.appState.isMenuVisible;
