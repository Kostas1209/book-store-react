import React from 'react';
import './App.css';
import BookCatalogContainer from './containers/BookCatalogContainer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { RegistrationComponent } from './components/Registration';
import UserBasketContainer from './containers/UserBasketContainer';
import LoginContainer from './containers/LoginContainer';
import UserCabinetContainer from './containers/UserCabinetContainer';
import UserAvatarContainer from './containers/UserAvatarContainer';
import LogoutContainer from './containers/LogoutContainer';
import axios from 'axios';
import { store } from './redux/store';
import { RootState } from './redux/rootReducer';
import { SaveAccessToken, ChangeUserStatus, DeleteTokens } from './redux/Login/actions';

interface AppComponentProps{
   isLogin : boolean
}



axios.interceptors.request.use(
   request => {
      let storeInfo : RootState = store.getState();
      let token = storeInfo.login.accessToken;
      if(token !== "")
      {
         request.headers['Authorization'] = 'Bearer ' + token;
      }
      return request;
   },
   error => {
      Promise.reject(error);
   }
)


axios.interceptors.response.use(
   (response)=>{
      return response;
   },

   function(error) {
       console.log(error);
       let storeInfo : RootState = store.getState();
       const originalRequest = error.config;
       if (error.response.status === 401 && originalRequest.url === 
         `${process.env.REACT_APP_API_URL}/api/refresh/`) {
               console.log("delete tokens");
               store.dispatch(DeleteTokens());
               store.dispatch(ChangeUserStatus(false));
               localStorage.clear();
               return Promise.reject(error);
            }

       if (error.response.status === 401 && !originalRequest._retry)
       {
            originalRequest._retry = true;
            return axios.post(`${process.env.REACT_APP_API_URL}/api/refresh/`,
                  {
                     'access' : storeInfo.login.accessToken,
                     'refresh' : storeInfo.login.refreshToken
                  })
            .then(res => 
               {
                  if(res.status === 200)
                  {
                     //save to store
                     store.dispatch(SaveAccessToken(res.data.access));

                     // axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access
                     originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access;
                     return axios(originalRequest);
                  }
               })
       }

       /*
       *   Make logout
       */
      store.dispatch(DeleteTokens());
      store.dispatch(ChangeUserStatus(false));
      localStorage.clear();
      //redirect


       return Promise.reject(error);
   }

)




export class App extends React.Component<AppComponentProps> {

  render()
  {
     return(
       <Router>
            {
               this.props.isLogin &&
               <div>
                  <UserBasketContainer />
                  <UserAvatarContainer />
                  <LogoutContainer />
               </div>
               
            }
            <Switch>
                <Route exact path="/" component={BookCatalogContainer} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/logup" component={RegistrationComponent} />
                <Route exact path="/cabinet" component={UserCabinetContainer} /> 
            </Switch>

        </Router>
     )
  }
}

export default App;
