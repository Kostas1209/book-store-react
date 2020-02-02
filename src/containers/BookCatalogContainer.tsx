import { UserBasketItem } from "../types/BookCatalogState";
import { BookComponent } from "../components/BooksCatalog";
import { connect } from 'react-redux';

  const mapStateToProps = (state : UserBasketItem) => ({
    book: state.book,
    amount: state.amount
  });
  
  
  export default connect(
    mapStateToProps
  )(BookComponent);