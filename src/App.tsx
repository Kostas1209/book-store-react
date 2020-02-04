import React from 'react';
import './App.css';
import BookCatalogContainer from './containers/BookCatalogContainer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginComponent } from './components/Login';
import { RegistrationComponent } from './components/Registration';
import UserBasketComponent from './components/UserBasket';

export class App extends React.Component {

  render()
  {
     return(
       <Router>
            <UserBasketComponent />
            <Switch>
                <Route exact path="/" component={BookCatalogContainer} />
                <Route exact path="/login" component={LoginComponent} />
                <Route exact path="/logup" component={RegistrationComponent} />
            </Switch>
        </Router>
     )
  }
}

export default App;
