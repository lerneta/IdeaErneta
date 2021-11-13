import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <NavBar />
      <ItemDetailContainer greeting={'Hola Soy Lu Erneta'} />
      <ItemListContainer greeting={'Hola Soy Lu Erneta'} />
    </div>
  );
}

export default App;
