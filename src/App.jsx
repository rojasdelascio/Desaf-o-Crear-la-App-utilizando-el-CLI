import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import OrdenCompleta from './components/OrdenCompleta';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';

function App() {


  let cont;

  const greeting = "¡Bienvenido a INDIEARG!";

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar-header">
          <Navbar />

        </nav>

      </header>

      <main>


        <Routes>
          {/* <Route path="/" element={<App />}></Route> */}
          <Route path="/" element={<ItemListContainer texto={greeting} />}></Route>
          <Route path="/productos" element={<ItemListContainer texto="Productos" />}></Route>
          <Route path="/categoria/:tipo" element={<ItemListContainer texto={'Tipo'} />}></Route>
          <Route path="/item/:detalleID" element={<ItemDetailContainer texto={'Detalle'} />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/ordenCompleta" element={<OrdenCompleta />}></Route>
          {/* <Route path="/cart" element={<Cart />}></Route> */}
        </Routes>

      </main>

    </div >
  );
}

export default App;
