import React from "react";

import { BookCatalogState } from "../types/BookCatalogState";
import { Book } from "../types/Book";
import "../styles/Book.scss";
import { reserveBook } from "../redux/BookCatalog/actions";

interface BookComponentProps{
    book: Book,
    dispatch: any
}

export class BookCatalogComponent extends React.Component {
    
    state: BookCatalogState = {
        error: "",
        books: []
    } 

    constructor(props: BookComponentProps){
        super(props);
        console.log("props" + props);
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

export class BookComponent extends React.Component {

    private amount: number;

    constructor(props : any){
        super(props);
        console.log(props)
        this.amount = 0;
        
    }
    private Handle = (e:any)=>{
        this.amount= e.target.value;
    }

    render (){
        return (
        <div className="block2">
            {/* <div className="block1">
                <p>title:   {this.props.book.title}</p>
                <p>author:  {this.props.book.author}</p>
                <p>price:   {this.props.book.price}</p>
                <p>balance: {this.props.book.amount_in_storage}</p>
            </div>
            <input type="number" id="amountOfOrder" onChange={this.Handle}/>
            <button onClick={()=> this.props.dispatch(reserveBook(this.props.book, this.amount))}>Reserve</button>  */}
        </div>
        );
    }
    
}

