// import { UserBasketState } from "../../types/BookCatalogState";
import { RootState } from "../rootReducer";
import { UserBasketItem, UserBasketState } from "../../types/BookCatalogState";



export const initialState: UserBasketState  =
{
    UserBooks: []
};

export function BookCatalogReducer(state: UserBasketState = initialState, action : any)
{
    switch(action.type)
    {
        case 'RESERVE_BOOK':
            {
                let reserve : UserBasketItem = {
                    book: action.book,
                    amount: action.amount
                }
                let newList = Object.assign([], state.UserBooks);
                CheckSimilarBookOrPush(newList, reserve);
                return {
                    ...state,
                    UserBooks: newList
                }
            }
        case 'DELETE_BOOK':
            {
                let newList = state.UserBooks.filter(obj => obj.book.id !==action.id );
                state.UserBooks=newList
                return {
                    ...state
                }
            }
        case 'RESET':
            {
                return {
                    ...initialState
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
            bookInBasket.amount = ( Number(bookInBasket.amount) + Number(newAddBook.amount ))
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