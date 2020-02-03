import { Book } from '../../types/Book';

export const reserveBook = (book : Book, amount : number) =>(
    {
        type : "RESERVE_BOOK",
        book,
        amount
    }
); 