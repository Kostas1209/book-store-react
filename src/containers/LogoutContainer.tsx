import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ChangeUserStatus, DeleteTokens } from "../redux/Login/actions";
import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { LogoutComponent } from "../components/Logout";
import { Reset } from "../redux/BookCatalog/actions";

const mapStateToProps = (state: RootState) =>
({
    isLogin: state.login.isLogin
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    changeUserStatus: (isLogin: boolean) => dispatch(ChangeUserStatus(isLogin)),
    deleteTokens: () => dispatch(DeleteTokens()),
    reset: () => dispatch(Reset()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutComponent);