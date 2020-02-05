import * as React from "react";
import { postLoginCredentials  } from "../services/LoginService";
import { Link, Redirect } from "react-router-dom";

interface LoginProps{
    cookies: any,
    userLogin: (isLogin : boolean) => void
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
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.userLogin(true);    ///
            this.setState({loged: true});  /// user loged in successfully

            document.cookie = `access=${data.access}; max-age=${7*60}; path=/`;/// save access token 

            document.cookie = `refresh=${data.refresh}; max-age=${25*60*60}; path=/`;/// save access token 

        })
        .catch(error => console.log(error))
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