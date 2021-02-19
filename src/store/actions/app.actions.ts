import { EAppActionTypes } from '../action-types/app.action-types';

export interface IHideMenu {
  type: EAppActionTypes.HIDE_MENU;
}

export interface IShowMenu {
  type: EAppActionTypes.SHOW_MENU;
}

export interface IToggleMenu {
  type: EAppActionTypes.TOGGLE_MENU;
}

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
  | IHideMenu
  | IShowMenu
  | IToggleMenu
  | IShowSpinner
  | IHideSpinner
  | IToggleSpinner;
