import { getUserInfo, changeUserInfo } from "../../services/User/UserCabinetService"
import * as React from "react";
import { Redirect } from "react-router-dom";


interface UserCabinetProps{
    accessToken: string
}

interface ReceiveData{
    username: string,
    first_name: string,
    last_name: string,
    email: string,
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
        redirect: false,
    }

    reader:FileReader

    constructor(props: UserCabinetProps, state:  ReceiveData & IRedirect)
    {
        super(props, state);
        this.reader = new FileReader();
    }

    UNSAFE_componentWillMount(){
         getUserInfo(this.props.accessToken)
        .then(data => {
            console.log(data.data);
            this.setState({email: data.data.email});
            this.setState({first_name: data.data.firstName});
            this.setState({last_name :data.data.lastName})
            this.setState({username : data.data.username})
        })
        .catch(console.log)
    }

    AddPhoto = (event: any) =>
    {
        event.preventDefault();
        let file = event.target.files[0];
        this.reader.readAsDataURL(file);
    }

    SendPhoto = (event: any) =>
    {
        if(this.reader.result)
        {
            let urlImage :string = this.reader.result as string
            changeUserInfo({avatar: urlImage.split(",")[1]})
            .then((data: any)=>console.log(data))
            .catch((error: any) => console.log(error))
            localStorage.removeItem("avatar");
        }
    }

    Handle = (e : any) => {
        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value} as any);
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
                <input type="file" name="photo" accept="image/*,image/jpeg" onChange={this.AddPhoto} />
                <button onClick={this.SendPhoto}>Send</button>
                {
                    this.state.redirect===true &&
                    <Redirect to="/" />
                }
            </div>
            
        )
    }
    
}