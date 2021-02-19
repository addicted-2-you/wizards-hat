import { TStore } from '../index';

export const selectMenuVisibility = (store: TStore): boolean => store.appState.isMenuVisible;

export const selectSpinnerVisibility = (store: TStore): boolean => store.appState.isSpinnerVisible;
