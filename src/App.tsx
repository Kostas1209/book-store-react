import React from 'react';
import './App.css';
import BookCatalogContainer from './containers/BookCatalogContainer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginComponent } from './components/Login';

export class App extends React.Component {

  render()
  {
     return(
       <Router>
            <Switch>
                <Route exact path="/" component={BookCatalogContainer} />
                <Route exact path="/login" component={LoginComponent} />
            </Switch>
        </Router>
     )
  }
}

export default App;
