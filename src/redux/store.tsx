import { createStore, applyMiddleware } from "redux";
import rootReducer  from "./rootReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from "../services/LocalStorageService";
import throttle from 'lodash.throttle';
///import createLogger from 'redux-logger';

const persistedState = loadState();
console.log(persistedState);
export const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(throttle(() => {
    saveState( store.getState());
  }, 200));