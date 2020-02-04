// import { UserBasketState } from "../../types/BookCatalogState";
import { RootState } from "../rootReducer";
import { UserBasketItem } from "../../types/BookCatalogState";

interface UserBasket{
    UserReservedBooks: UserBasketItem[]
}

export const initialState: UserBasket  =
{
    UserReservedBooks: []
};

export function BookCatalogReducer(state: UserBasket = initialState, action : any)
{
    switch(action.type)
    {
        case 'RESERVE_BOOK':
            {
                const reserve : UserBasketItem = {
                    book: action.book,
                    amount: action.amount
                }
                const newList = Object.assign([], state.UserReservedBooks);
                newList.push(reserve);
                return {
                    ...state,
                    UserReservedBooks: newList
                }
            }

        default:
            return state;
    }
}

export const reservedBooks = (state: RootState) => state.reservedBooks;