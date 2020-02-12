import { BookCatalogReducer } from "./BookCatalog/reducer";
import { combineReducers } from "redux";
import { UserBasketState } from "../types/BookCatalogState";
import { Login, LoginReducer } from "./Login/reducer";
import { itemsIsLoading, itemsHasError, items } from "./GetAllUsers/reducer";
import { User } from "../components/GetAllUsers";

export interface RootState {
   reservedBooks: UserBasketState,
   login: Login,
   isLoading: any,
   isError : any,
   allUsers : User[]
}

const rootReducer = combineReducers({
    reservedBooks: BookCatalogReducer,
    login: LoginReducer,
    isLoading : itemsIsLoading,
    isError : itemsHasError,
    allUsers : items
});


export default rootReducer;