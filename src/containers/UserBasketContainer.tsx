import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import UserBasketComponent from "../components/UserBasket";
import { Dispatch } from "react";
import { AnyAction } from "redux";


const mapStateToProps = (state : RootState) => ({
    UserBooks: state.reservedBooks.UserBooks
  });

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    userLogin: (isLogin: boolean) => dispatch(ChangeUserStatus(isLogin))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserBasketComponent);