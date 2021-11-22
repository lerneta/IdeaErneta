import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Pages/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';

function App() {

  return (
    <div className="App">
      <header>
      </header>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting={'Hola Soy Lu Erneta'} />
          </Route>
          <Route path="/item/:id">
            <CartProvider>
              <ItemDetailContainer />
            </CartProvider>
          </Route>
          <Route path="/cart/:mount">
            <Cart />
          </Route>
          <Route path="/categorias">
            <ItemListContainer greeting={'Hola Soy Lu Erneta'} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
