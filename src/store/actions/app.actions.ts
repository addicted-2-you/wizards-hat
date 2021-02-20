import { EAppStages } from 'constants/EAppStages';
import { EAppActionTypes } from '../action-types/app.action-types';

// game modes
export interface ISetGameMode {
  type: EAppActionTypes.SET_APP_STAGE;
  appStage: EAppStages;
}

// main menu
export interface IHideMenu {
  type: EAppActionTypes.HIDE_MENU;
}

export interface IShowMenu {
  type: EAppActionTypes.SHOW_MENU;
}

export interface IToggleMenu {
  type: EAppActionTypes.TOGGLE_MENU;
}

// spinner
export interface IShowSpinner {
  type: EAppActionTypes.SHOW_SPINNER;
}

export interface IHideSpinner {
  type: EAppActionTypes.HIDE_SPINNER;
}

export interface IToggleSpinner {
  type: EAppActionTypes.TOGGLE_SPINNER;
}

export type TAppAction =
  | ISetGameMode
  | IHideMenu
  | IShowMenu
  | IToggleMenu
  | IShowSpinner
  | IHideSpinner
  | IToggleSpinner;
