import * as React from "react";
import { postRegistrationCredentials } from "../services/RegistrationService";
import { Link } from "react-router-dom";

interface RegistrationState{
    email: string,
    password: string,
    username: string,
    first_name: string,
    last_name: string
} 

export class RegistrationComponent extends React.Component<{}, RegistrationState>
{
    state: RegistrationState = {
        email: "",
        password: "",
        username: "",
        first_name: "",
        last_name: ""
    }

    Handle = (event: any) => {
        this.setState({[event.target.name]: event.target.value } as any);
    }

    SendForm()
    {  
        postRegistrationCredentials(this.state.email, this.state.password, this.state.username,
            this.state.first_name, this.state.last_name)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    render()
    {
        return(
            <div>
                <fieldset>
                    <legend>Log up your account</legend>
                    <p>email:      <input type="text" name="email" onChange={this.Handle}/> </p>
                    <p>password:   <input type="text" name="password" onChange={this.Handle}/> </p>
                    <p>username:   <input type="text" name="username" onChange={this.Handle}/> </p>
                    <p>name:       <input type="text" name="first_name" onChange={this.Handle}/> </p>
                    <p>last name:  <input type="text" name="last_name" onChange={this.Handle}/> </p>
                    <button type="submit" onClick={()=>this.SendForm()}>Send</button>
                </fieldset>
                <Link to="/login">Login</Link>
                <Link to="/">Books</Link>
                
            </div>
        )
    }
}