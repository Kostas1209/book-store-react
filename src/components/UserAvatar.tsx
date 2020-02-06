import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import { getUserAvatar } from '../services/UserAvatarService';
import "../styles/UserAvatar.scss";
import { Redirect } from 'react-router-dom';

interface UserAvatarProps{
    accessToken: string
}

interface UserAvatarState{
    image: string,
    redirect: boolean
}


export class UserAvatarComponent extends React.Component<UserAvatarProps, UserAvatarState>{

    state : UserAvatarState = {
        image: "data:image/jpeg;base64,",
        redirect: false
    }
   UNSAFE_componentWillMount(){
       const data = localStorage.getItem("avatar");
       if(data === null)
       {
           getUserAvatar(this.props.accessToken)
            .then(response => response.json())
            .then(data =>  
                {
                    this.setState({image : this.state.image + data});
                    localStorage.setItem("avatar",data);
                })
            .catch(console.log)
       }
       else {
           console.log("get from local storage");
            this.setState({image : this.state.image + data});
       }
       
   }

   HandleClick = () => {
    this.setState({redirect : true});
}
    
   render()
   {
       return (
            <div>
                <button className="button" onClick={this.HandleClick} >
                    <Avatar className="avatar" alt="Remy Sharp" src={this.state.image} />
                </button>
                {
                    this.state.redirect===true &&
                    <Redirect to="/cabinet" />
                }
            </div>
        )
   }
    
}