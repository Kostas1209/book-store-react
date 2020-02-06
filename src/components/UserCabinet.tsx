import { getUserInfo } from "../services/UserCabinetService"
import * as React from "react";
import { Redirect } from "react-router-dom";


interface UserCabinetProps{
    accessToken: string
}

interface ReceiveData{
    username: string,
    first_name: string,
    last_name: string,
    email: string
}

interface IRedirect{
    redirect: boolean
}


export class UserCabinetComponent extends React.Component<UserCabinetProps, ReceiveData & IRedirect>
{
    state : ReceiveData & IRedirect =
    {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        redirect: false
    }
    UNSAFE_componentWillMount(){
         getUserInfo(this.props.accessToken)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({email: data.email});
            this.setState({first_name: data.first_name});
            this.setState({last_name :data.last_name})
            this.setState({username : data.username})
        })
        .catch(console.log)
    }

    Handle = (e : any) => {
        this.setState({[e.targe.name] : e.target.value} as any);
    }

    HandleClick = () => {
        this.setState({redirect : true});
    }
    render()
    {
        return (
            <div>
                <div>
                    <button onClick={this.HandleClick}>Book catalog</button>
                </div>
                <div>
                    <p>email:    {this.state.email}</p>
                    <p>username: {this.state.username}</p>
                    <p>first_name: <input name="first_name" onChange={this.Handle} value={this.state.first_name}/></p>
                    <p>last_name: <input name="last_name" onChange={this.Handle} value={this.state.last_name} /></p>
                </div>
                {
                    this.state.redirect===true &&
                    <Redirect to="/" />
                }

            </div>
            
        )
    }
    
}