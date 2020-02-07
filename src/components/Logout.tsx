import * as React from "react";
import { Redirect } from "react-router-dom";

interface LogoutProps{
    isLogin: boolean,
    changeUserStatus: (isLogin: boolean) => void,
    deleteTokens: () => void,
    reset: () => void
}

interface LogoutState{
    redirect: boolean
}

export class LogoutComponent extends React.Component<LogoutProps, LogoutState>
{
    state : LogoutState = {
        redirect: false
    };

    LogOut (){
        this.props.reset();
        this.props.changeUserStatus(false);
        localStorage.clear();
        this.props.deleteTokens();
        this.setState({redirect: true});
    }

    render()
    {
        return(
            <div>
                <button onClick={()=>this.LogOut()}>
                    Log out     
                </button>
                {
                    this.state.redirect === true &&
                    <div>
                        <Redirect to="/login" />
                    </div>
                    
                }
            </div>
        )
    }
}

