import React from "react";

import { BookCatalogState } from "../types/BookCatalogState";
import { Book } from "../types/Book";
import "../styles/Book.scss";

export class BookCatalogComponent extends React.Component {
    
    state: BookCatalogState = {
        error: "",
        books: []
    } 

    constructor(props: Readonly<{}>){
        super(props);
        this.sendGetRequest()
    }

    private sendGetRequest = () => {
        fetch('http://localhost:8000/api/book_catalog')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
              this.setState({books: data.books} )
            })
            .catch(console.log)
    };

    render(){
        return(
            <div>
                <ul>
                    {this.state.books.map(book =>
                     <BookComponent  key={book.id}
                         {...book}/>
                        )}
                   
                </ul>
            </div>
        );
    }
};

const BookComponent = (book: Book) => {
    return (
        <div className="block2">
            <div className="block1">
                <p>title:   {book.title}</p>
                <p>author:  {book.author}</p>
                <p>price:   {book.price}</p>
                <p>balance: {book.amount_in_storage}</p>
            </div>
        </div>
    );
}