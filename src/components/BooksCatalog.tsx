import React from "react";

import { BookCatalogState, UserBasketItem } from "../types/BookCatalogState";
import "../styles/Book.scss";
import { Book } from "../types/Book";
import { getBooks } from "../services/BookCatalogService";
import { Link } from "react-router-dom";


export interface BookComponentProps{ 
    UserBooks?: UserBasketItem [],
    isLogin: boolean,
    reserve: (book: Book,amount: number ) => void 
}

export interface BookComponentState{ 
    books: Book[]
}

export class BookCatalogComponent extends React.Component<BookComponentProps, BookComponentState> {
    
    state: BookCatalogState = {
        books: []
    } 
    private amount: number = 0;

    componentWillMount() {
        getBooks()
        .then(res => res.json())
        .then((data) => {
            this.setState({books : data.books})
        })
        .catch(console.log)
        this.amount=1;
    }

    private Handle = (e:any)=>{
        this.amount= e.target.value;
    }

    render(){
        return(
            <div>
                {
                    !this.props.isLogin &&
                    <Link to="/login">Login</Link>
                }
                <ul>
                    {this.state.books.map(book =>
                    <li key= {book.id}>
                        <div className="block2">
                            <div className="block1">
                                <p>title:   {book.title}</p>
                                <p>author:  {book.author}</p>
                                <p>price:   {book.price}</p>
                                <p>balance: {book.amount_in_storage}</p>
                            </div>
                            <div>
                                {
                                    book.amount_in_storage > 0 && 
                                    <p>
                                        <input type="number" id="amountOfOrder" onChange={this.Handle} min="1" max={book.amount_in_storage}/>
                                        <button onClick={() => this.props.reserve(book, this.amount)}>Reserve</button>
                                    </p>
                                }
                            </div>  
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        );
    }
};

