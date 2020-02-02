import { BookCatalogReducer } from "./BookCatalog/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({book:BookCatalogReducer})