import { UserBasketState } from "../../types/BookCatalogState";
import { RootState } from "../rootReducer";

export const initialState: UserBasketState=
{
    UserBooks: []
};

export function BookCatalogReducer(state: UserBasketState = initialState, action : any)
{
    switch(action.type)
    {
        case 'RESERVE_BOOK':
            {
                const { reserve } = action.payload;
                console.log(reserve);
                return {
                    ...state,
                    UserBooks: state.UserBooks.push(reserve)
                }
            }

        default:
            return state;
    }
}

export const reservedBooks = (state: RootState) => state.reservedBooks;