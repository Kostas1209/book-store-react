import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ChangeUserStatus } from "../redux/Login/actions";
import { Reset } from "../redux/BookCatalog/actions";
import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { LogoutComponent } from "../components/Logout";

const mapStateToProps = (state: RootState) =>
({
    isLogin: state.login.isLogin
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    changeUserStatus: (isLogin: boolean) => dispatch(ChangeUserStatus(isLogin)),
    reset: () => dispatch(Reset()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutComponent);