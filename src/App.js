import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <NavBar />
      <ItemListContainer greeting={'Hola Soy Lu Erneta'} />
    </div>
  );
}

export default App;
