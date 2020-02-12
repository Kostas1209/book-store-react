import { Book } from '../../types/Book';
import { BookCatalogActions } from './types'; 


export const reserveBook = (book : Book, amount : number) =>(
    {
        type : BookCatalogActions.RESERVE_BOOK,
        book,
        amount
    }
); 

export const DeleteBook = (id: number ) =>(
    {
        type : BookCatalogActions.DELETE_BOOK,
        id
    }
); 

export const Reset = () => (
    {
        type: BookCatalogActions.RESET
    }
);