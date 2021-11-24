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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>

      </header>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting={'Hola Soy Lu Erneta'} />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart/">
              <Cart />
            </Route>
            <Route path="/categorias">
              <ItemListContainer greeting={'Hola Soy Lu Erneta'} />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
