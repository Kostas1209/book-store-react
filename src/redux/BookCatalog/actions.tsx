import { Book } from '../../types/Book';

export const reserveBook = (book : Book, amount : number) =>(
    {
        type : "RESERVE_BOOK",
        book,
        amount
    }
); 

export const DeleteBook = (id: number ) =>(
    {
        type : "DELETE_BOOK",
        id
    }
); 

export const Reset = () =>(
    {
        type : "RESET"
    }
); 