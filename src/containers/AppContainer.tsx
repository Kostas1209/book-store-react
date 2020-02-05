import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import App from "../App";


 const mapStateToProps = (state : RootState) => ({
    isLogin: state.login.isLogin
  });

export default connect(
    mapStateToProps
)(App);

