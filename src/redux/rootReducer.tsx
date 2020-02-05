import { BookCatalogReducer } from "./BookCatalog/reducer";
import { combineReducers } from "redux";
import { UserBasketItem } from "../types/BookCatalogState";
import { Login, LoginReducer } from "./Login/reducer";

export interface RootState {
   reservedBooks: UserBasketItem [],
   login: Login
}

const rootReducer = combineReducers({
    reservedBooks: BookCatalogReducer,
    login: LoginReducer
});

export default rootReducer;