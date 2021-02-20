import { EAppStages } from 'constants/EAppStages';
import { EAppActionTypes } from '../action-types/app.action-types';
import * as AppActions from '../actions/app.actions';

// app stage
export const setAppStage = (appStage: EAppStages): AppActions.ISetGameMode => ({
  type: EAppActionTypes.SET_APP_STAGE,
  appStage,
});

// menu
export const hideMenu = (): AppActions.IHideMenu => ({
  type: EAppActionTypes.HIDE_MENU,
});

export const showMenu = (): AppActions.IShowMenu => ({
  type: EAppActionTypes.SHOW_MENU,
});

export const toggleMenu = (): AppActions.IToggleMenu => ({
  type: EAppActionTypes.TOGGLE_MENU,
});

// spinner
export const showSpinner = (): AppActions.IShowSpinner => ({
  type: EAppActionTypes.SHOW_SPINNER,
});

export const hideSpinner = (): AppActions.IHideSpinner => ({
  type: EAppActionTypes.HIDE_SPINNER,
});

export const toggleSpinner = (): AppActions.IToggleSpinner => ({
  type: EAppActionTypes.TOGGLE_SPINNER,
});
