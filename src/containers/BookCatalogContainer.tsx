import { UserBasketItem } from "../types/BookCatalogState";

import { connect } from 'react-redux';
import { reserveBook } from '../redux/BookCatalog/actions';
import { Dispatch } from "react";
import { AnyAction, bindActionCreators } from "redux";
import { BookCatalogComponent } from "../components/BooksCatalog";
import { Book } from "../types/Book";
import { RootState } from "../redux/rootReducer";

  const mapStateToProps = (state : RootState) => ({
    userBooks: state.reservedBooks.UserBooks
  });
  
  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    reserveBook: (book: Book, amount: number) => dispatch(reserveBook(book, amount))
  })
    
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookCatalogComponent);