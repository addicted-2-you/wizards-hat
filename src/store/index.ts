import { createStore, combineReducers, applyMiddleware, CombinedState } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import appReducer from './reducers/app.reducer';
import gameReducer from './reducers/game.reducer';

const rootReducer = combineReducers({
  appState: appReducer,
  gameState: gameReducer,
});

const rootMiddleware = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, rootMiddleware);

export type TStore = ReturnType<typeof rootReducer>;

export { store };
