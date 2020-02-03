import React from 'react';
import './App.css';
import { BookCatalogComponent } from './components/BooksCatalog';


export class App extends React.Component {

  render()
  {
     return(
       <BookCatalogComponent />   /// fucking error
     )
  }
}

export default App;
