import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { UserAvatarComponent } from "../components/UserAvatar";


 const mapStateToProps = (state : RootState) => ({
    accessToken: state.login.accessToken
  });

export default connect(
    mapStateToProps
)(UserAvatarComponent);