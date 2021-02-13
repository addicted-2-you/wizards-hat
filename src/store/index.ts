import { createStore, combineReducers, applyMiddleware, CombinedState } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// states
import { IAppState } from './init-states/app';

// reducers
import appReducer from './reducers/app.reducer';

const rootReducer = combineReducers({
  appState: appReducer,
});

const rootMiddleware = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, rootMiddleware);

export type TStore = CombinedState<{
  appState: IAppState;
}>;

export { store };
