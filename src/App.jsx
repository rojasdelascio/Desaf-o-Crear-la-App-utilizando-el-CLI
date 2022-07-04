import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemsCounter from './components/ItemsCounter';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const Elementos = [
    { Titulo: 'Pravus', Tipo: 'Cortometraje', Descripcion: 'Un hombre lucha con sus demonios internos; y, sin poder mostrar demasiado, cuenta todo sobre su pasado', Precio: 5 },
    { Titulo: 'Comandante', Tipo: 'Cuento Corto', Descripcion: 'Pasaron los años en un abrir y cerrar de ojos, y Juan ahora se percata de que el resto de su vida transcurrirá en la prisión de un estado totalitarista', Precio: 3 },
    { Titulo: 'Apocalipsis', Tipo: 'Guión', Descripcion: '1 año después de una explosión nuclear en Argentina, 5 personas de orígenes distintos, se unen para sobrevivir', Precio: 4 },
  ];

  let cont;

  const greeting = "¡Bienvenido a INDIEARG!";

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Navbar >
            <CartWidget><ItemsCounter /></CartWidget>
          </Navbar>
        </nav>
      </header>

      <main>
        <ItemListContainer texto={greeting} />
        <ItemDetailContainer />

      </main>

    </div>
  );
}

export default App;
