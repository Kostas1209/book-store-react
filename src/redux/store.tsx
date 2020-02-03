import { createStore, applyMiddleware } from "redux";
import rootReducer  from "./rootReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
///import createLogger from 'redux-logger';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState())