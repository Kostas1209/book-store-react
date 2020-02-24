import * as React from "react";
import { postLoginCredentials, LoginWithFaceBookService  } from "../../services/Auth/LoginService";
import { Link, Redirect } from "react-router-dom";

interface LoginProps{
    userLogin: (isLogin : boolean) => void,
    saveAccessToken: (accessToken: string) => void,
    saveRefreshToken: (refreshToken : string) => void
}

interface LoginState{
    email: string,
    password: string,
    loged: boolean
}

export class LoginComponent extends React.Component<LoginProps, LoginState>
{
    state: LoginState = {
        email: "",
        password: "",
        loged: false
    };

    constructor(props: Readonly<LoginProps>){
        super(props);
        console.log(this.state)
    }

    HandleEmail = (event:any) => {
        this.setState({email: event.target.value} as any);
    }

    HandlePassword = (event:any) => {
        this.setState({password: event.target.value} as any);
    }

    SendForm()
    {
        postLoginCredentials (this.state.email, this.state.password)
        .then(data => {
            console.log(data)
            this.props.saveAccessToken(data.data.data.access)/// save access token 

            this.props.saveRefreshToken(data.data.data.refresh)/// save refresh token
            
            this.props.userLogin(true);    ///
            this.setState({loged: true});  /// user loged in successfully

        })
        .catch(error => console.log(error))
    }

    WithHelpFacebook()
    {
        LoginWithFaceBookService()
        .then((data: any) =>{})
        .catch((error: any) => {});
    }

    render()
    {
        return(
            <div>
                <fieldset>
                    <legend>Login</legend>
                    <p>email:  <input type="email" name="email" value={this.state.email} onChange={this.HandleEmail}/></p>
                    <p>password: <input type="password" name="pass" value={this.state.password} onChange={this.HandlePassword} /></p>
                    <button onClick={()=>this.SendForm()} >Login</button>
                    <button onClick={()=>this.WithHelpFacebook()} >Facebook</button>
                </fieldset>
                {
                    this.state.loged===true &&
                    <Redirect to="/" />
                }
                <Link to="/logup">Log up</Link>
                <Link to="/">Books</Link>
            </div>
        );
    }
}