import { BookCatalogReducer } from "./BookCatalog/reducer";
import { combineReducers } from "redux";
import { UserBasketState } from "../types/BookCatalogState";

export interface RootState {
   reservedBooks: UserBasketState
}

const rootReducer = combineReducers({
    reservedBooks: BookCatalogReducer
});

export default rootReducer;