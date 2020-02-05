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
                let reserve : UserBasketItem = {
                    book: action.book,
                    amount: action.amount
                }
                let newList = Object.assign([], state.UserReservedBooks);
                CheckSimilarBookOrPush(newList, reserve);
                return {
                    ...state,
                    UserReservedBooks: newList
                }
            }

        default:
            return state;
    }
}

function CheckSimilarBookOrPush(userBooks : UserBasketItem[], newAddBook: UserBasketItem) : void
{
    let isSimilar : boolean = false
    userBooks.forEach(bookInBasket => {
        if( bookInBasket.book.id === newAddBook.book.id)
        {
            bookInBasket.amount = (bookInBasket.amount + newAddBook.amount) as number
            isSimilar = true
            return 
        }
    });
    if (!isSimilar)
    {
        userBooks.push(newAddBook);
    }
    
}

export const reservedBooks = (state: RootState) => state.reservedBooks;