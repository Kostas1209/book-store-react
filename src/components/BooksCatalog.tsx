import React from "react";

import { BookCatalogState, UserBasketItem } from "../types/BookCatalogState";
import "../styles/Book.scss";
import { Book } from "../types/Book";
import { getBooks } from "../services/BookCatalogService";
import { Link } from "react-router-dom";


export interface BookComponentProps{ 
    UserBooks: UserBasketItem [],
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
    UNSAFE_componentWillMount() {
        getBooks()
        .then((data) => {
            this.setState({books : data.data.books})
            //this.RecountBooks();
        })
        .catch(console.log)
        
        this.amount=1;
    }

    // private RecountBooks()
    // {
    //     this.state.books.forEach(book => {
    //         this.props.UserBooks.forEach(orderedBook => {
    //             if(book.id === orderedBook.book.id)
    //             {
    //                 console.log(book.id);
    //                 book.amount_in_storage -= orderedBook.amount;
    //             }
    //         });
    //     });
    // }

    private Handle = (e:any)=>{
        this.amount= e.target.value;
    }

    private HandleButton =(book: Book, amount: number)=>{
        if(amount <= book.amount_in_storage && amount > 0)
        {
            let newBook = this.state.books;
            for(let i =0;i<this.state.books.length; ++i)
            {
                if(this.state.books[i].id === book.id){
                    newBook[i].amount_in_storage -= amount;
                    this.setState({books : newBook});
                }
            }
            this.props.reserve(book, amount)
        }   
    }

    render(){
        return(
            <div>
                {
                    !this.props.isLogin &&
                    <Link to="/login">Login</Link>
                }
                <Link to="/users">Users</Link>
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
                                    book.amount_in_storage > 0 && this.props.isLogin && 
                                    <p>
                                        <input type="number" id="amountOfOrder" onChange={this.Handle} min="1" max={book.amount_in_storage}/>
                                        <button onClick={() => this.HandleButton(book, this.amount)}>Reserve</button>
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

