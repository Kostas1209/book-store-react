import { Book } from './Book'  

export interface BookCatalogState {
    error: string;
    books: Book[]
  }