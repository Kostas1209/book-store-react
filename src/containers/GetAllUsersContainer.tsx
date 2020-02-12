import { RootState } from "../redux/rootReducer";
import { itemsAxiosData } from "../redux/GetAllUsers/actions";
import { connect } from "react-redux";
import { GetAllUsersComponent } from "../components/GetAllUsers";


const mapStateToProps = (state : RootState) => {
    return {
        items: state.allUsers,
        hasError : state.isError,
        isLoading : state.isLoading
    };
    
}

const mapDispatchToProps = (dispatch: any) =>
{
    return{
        axiosData: (url : string) => dispatch(itemsAxiosData(url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetAllUsersComponent);
