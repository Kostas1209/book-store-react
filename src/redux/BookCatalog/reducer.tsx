import { UserBasketState } from "../../types/BookCatalogState";

export const initialState: UserBasketState =
{
    books: []
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
                   books: state.books.push(reserve)
                }
            }

        default:
            return state;
    }
}