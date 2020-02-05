import { Dispatch } from "react";
import { ChangeUserStatus } from "../redux/Login/actions";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { LoginComponent } from "../components/Login";

const mapStateToProps = (ownProps: { cookies: any; }) =>({
    cookies: ownProps.cookies
})


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    userLogin: (isLogin: boolean) => dispatch(ChangeUserStatus(isLogin))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);