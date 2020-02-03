import React, { Dispatch } from "react";

import { BookCatalogState, UserBasketItem, UserBasketState } from "../types/BookCatalogState";
import "../styles/Book.scss";
import { Book } from "../types/Book";


interface BookComponentProps{ 
    UserBooks?: UserBasketState,
    reserve: (book: Book, amount: number) => Object  
}

export class BookCatalogComponent extends React.Component<BookComponentProps, {}> {
    
    state: BookCatalogState = {
        books: []
    } 
    private amount: number = 0;

    componentWillMount() {
        console.log(this.props)
        this.sendGetRequest()
        this.amount=0;
    }

    private sendGetRequest = () => {
        fetch('http://localhost:8000/api/book_catalog')
            .then(res => res.json())
            .then((data) => {
              this.setState({books: data.books} )
            })
            .catch(console.log)
    };

    private Handle = (e:any)=>{
        this.amount= e.target.value;
    }

    render(){
        return(
            <div>
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
                            <input type="number" id="amountOfOrder" onChange={this.Handle}/>
                            { <button onClick={() => this.props.reserve(book, this.amount)}>Reserve</button>   }
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        );
    }
};

