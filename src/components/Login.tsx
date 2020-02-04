import * as React from "react";
import { postCredentials } from "../services/LoginService";

interface LoginState{
    email: string,
    password: string
}

export class LoginComponent extends React.Component<{}, LoginState>
{
    state: LoginState = {
        email: "",
        password: ""
    };

    constructor(props: Readonly<{}>){
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
        postCredentials(this.state.email, this.state.password)
        .then(response => response.json())
        .then(data => console.log(data))
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
            </div>
        );
    }
}