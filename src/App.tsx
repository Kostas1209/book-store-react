import React from 'react';
import './App.css';
import BookCatalogContainer from './containers/BookCatalogContainer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { RegistrationComponent } from './components/Registration';
import UserBasketContainer from './containers/UserBasketContainer';
import LoginContainer from './containers/LoginContainer';
import UserCabinetContainer from './containers/UserCabinetContainer';

interface AppComponentProps{
   isLogin : boolean
}

export class App extends React.Component<AppComponentProps> {

  render()
  {
     return(
       <Router>
            {
               this.props.isLogin &&
               <div>
                  <UserCabinetContainer />
                  <UserBasketContainer />
               </div>
               
            }
            <Switch>
                <Route exact path="/" component={BookCatalogContainer} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/logup" component={RegistrationComponent} />
                {/* <Route exact path="/cabinet" component={UserCabinetContainer} /> */}
            </Switch>
        </Router>
     )
  }
}

export default App;
