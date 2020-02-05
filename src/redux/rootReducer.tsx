import { BookCatalogReducer } from "./BookCatalog/reducer";
import { combineReducers } from "redux";
import { UserBasketItem, UserBasketState } from "../types/BookCatalogState";
import { Login, LoginReducer } from "./Login/reducer";

export interface RootState {
   reservedBooks: UserBasketState,
   login: Login
}

const rootReducer = combineReducers({
    reservedBooks: BookCatalogReducer,
    login: LoginReducer
});

export default rootReducer;