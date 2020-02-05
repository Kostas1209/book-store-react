import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import UserBasketComponent from "../components/UserBasket";


const mapStateToProps = (state : RootState) => ({
    UserBooks: state.reservedBooks
  });

export default connect(
    mapStateToProps
)(UserBasketComponent);