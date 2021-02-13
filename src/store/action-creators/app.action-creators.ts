import { EAppActionTypes } from '../action-types/app.action-types';
import * as AppActions from '../actions/app.actions';

export const hideMenu = (): AppActions.IHideMenu => ({
  type: EAppActionTypes.HIDE_MENU,
});

export const showMenu = (): AppActions.IShowMenu => ({
  type: EAppActionTypes.SHOW_MENU,
});

export const toggleMenu = (): AppActions.IToggleMenu => ({
  type: EAppActionTypes.TOGGLE_MENU,
});
