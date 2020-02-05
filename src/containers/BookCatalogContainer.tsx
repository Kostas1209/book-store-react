

import { connect } from 'react-redux';
import { reserveBook } from '../redux/BookCatalog/actions';
import { Dispatch } from "react";
import { AnyAction} from "redux";
import { BookCatalogComponent } from "../components/BooksCatalog";
import { Book } from "../types/Book";
import { RootState } from "../redux/rootReducer";

  const mapStateToProps = (state : RootState) => ({
    userBooks: state.reservedBooks.UserBooks,
    isLogin: state.login.isLogin
  });
  
  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    reserve: (book: Book, amount: number) => dispatch(reserveBook(book, amount))
  })
    
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookCatalogComponent);