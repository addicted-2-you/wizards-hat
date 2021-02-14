import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers
import appReducer from './reducers/app.reducer';
import gameReducer from './reducers/game.reducer';
import terminalReducer from './reducers/terminal.reducer';

const rootReducer = combineReducers({
  appState: appReducer,
  gameState: gameReducer,
  terminalState: terminalReducer,
});

const rootMiddleware = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, rootMiddleware);

export type TStore = ReturnType<typeof rootReducer>;

export { store };
