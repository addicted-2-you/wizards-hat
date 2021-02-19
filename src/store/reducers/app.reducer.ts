import { EAppActionTypes } from '../action-types/app.action-types';
import { TAppAction } from '../actions/app.actions';
import { appInitState, IAppState } from '../init-states/app';

export default (state: IAppState = appInitState, action: TAppAction): IAppState => {
  switch (action.type) {
    case EAppActionTypes.HIDE_MENU: {
      return { ...state, isMenuVisible: false };
    }
    case EAppActionTypes.SHOW_MENU: {
      return { ...state, isMenuVisible: false };
    }
    case EAppActionTypes.TOGGLE_MENU: {
      const { isMenuVisible } = state;
      return { ...state, isMenuVisible: !isMenuVisible };
    }
    case EAppActionTypes.SHOW_SPINNER: {
      return { ...state, isSpinnerVisible: true };
    }
    case EAppActionTypes.HIDE_SPINNER: {
      return { ...state, isSpinnerVisible: false };
    }
    case EAppActionTypes.TOGGLE_SPINNER: {
      const { isSpinnerVisible } = state;
      return { ...state, isSpinnerVisible: !isSpinnerVisible };
    }
    default: {
      return state;
    }
  }
};
