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

export type TAppAction = IHideMenu | IShowMenu | IToggleMenu;
