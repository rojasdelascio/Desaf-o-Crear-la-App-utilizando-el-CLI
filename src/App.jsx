
//OJO con lo de abajo
import Navbar from './components/navbar'
import React, { Component } from 'react';
import Elemento from './components/elemento';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// import './App.css';


function App() {
  const Elementos = [
    { Titulo: 'Pravus', Tipo: 'Cortometraje', Descripcion: 'Un hombre lucha con sus demonios internos; y, sin poder mostrar demasiado, cuenta todo sobre su pasado', Precio: 5 },
    { Titulo: 'Comandante', Tipo: 'Cuento Corto', Descripcion: 'Pasaron los años en un abrir y cerrar de ojos, y Juan ahora se percata de que el resto de su vida transcurrirá en la prisión de un estado totalitarista', Precio: 3 },
    { Titulo: 'Apocalipsis', Tipo: 'Guión', Descripcion: '1 año después de una explosión nuclear en Argentina, 5 personas de orígenes distintos, se unen para sobrevivir', Precio: 4 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Navbar />
        </nav>
      </header>
      <div>

      </div>

      <main>
        <div className="destacados">
          <h2 className="destacados__titulo">Descatados</h2>
          <Elemento imagen={require('../src/assets/Pravus.png')} titulo={Elementos[0].Titulo} tipo={Elementos[0].Tipo} descripcion={Elementos[0].Descripcion} precio={Elementos[0].Precio} />
          <Elemento imagen={require('../src/assets/comandante.png')} titulo={Elementos[1].Titulo} tipo={Elementos[1].Tipo} descripcion={Elementos[1].Descripcion} precio={Elementos[1].Precio} />
          <Elemento imagen={require('../src/assets/apocalipsis.png')} titulo={Elementos[2].Titulo} tipo={Elementos[2].Tipo} descripcion={Elementos[2].Descripcion} precio={Elementos[2].Precio} />

        </div>
      </main>
    </div>


  );
}

export default App;
