import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import UserBasketComponent from "../components/UserBasket";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { DeleteBook } from "../redux/BookCatalog/actions";


const mapStateToProps = (state : RootState) => ({
    UserBooks: state.reservedBooks.UserBooks
  });

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    deleteBook: (id : number) => dispatch(DeleteBook(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBasketComponent);