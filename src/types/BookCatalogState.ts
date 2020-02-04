import { Book } from './Book'  

export interface BookCatalogState {
    //error: string;
    books: Book[]
  }

export interface UserBasketItem {
    book: Book,
    amount: number
}
