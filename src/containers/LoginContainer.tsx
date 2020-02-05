import { Dispatch } from "react";
import { ChangeUserStatus, SaveAccessToken, SaveRefreshToken } from "../redux/Login/actions";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { LoginComponent } from "../components/Login";


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>({
    userLogin: (isLogin: boolean) => dispatch(ChangeUserStatus(isLogin)),
    saveAccessToken: (accessToken: string) => dispatch(SaveAccessToken(accessToken)),
    saveRefreshToken: (refreshToken: string) => dispatch(SaveRefreshToken(refreshToken)),
})

export default connect(
    null,
    mapDispatchToProps
)(LoginComponent);