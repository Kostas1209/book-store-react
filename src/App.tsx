import React from 'react';
import './App.css';
import { BookCatalogComponent } from './components/BooksCatalog';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const App: React.FC = () => {
  return (
    <Provider store = {store}>
        <BookCatalogComponent />
    </Provider>
  );
}

export default App;
