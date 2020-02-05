import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { UserCabinetComponent } from "../components/UserCabinet";


 const mapStateToProps = (state : RootState) => ({
    accessToken: state.login.accessToken
  });

export default connect(
    mapStateToProps
)(UserCabinetComponent);