import { BookCatalogReducer } from "./BookCatalog/reducer";
import { combineReducers } from "redux";
import { UserBasketItem } from "../types/BookCatalogState";

export interface RootState {
   reservedBooks: UserBasketItem []
}

const rootReducer = combineReducers({
    reservedBooks: BookCatalogReducer
});

export default rootReducer;