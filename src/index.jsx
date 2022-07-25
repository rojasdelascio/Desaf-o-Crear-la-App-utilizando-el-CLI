import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
// DUDA: lo que importas abajo es la funcion que tiene las funciones adentro, ¿es cierto esto? 
//DUDA: OJO: NO importas a la constante =react.createContext
import { CartProvider } from './components/Context/CartContext';
//FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLoeCx0a5J1qpcUa11ynEtO1zIr5KTLCU",
  authDomain: "indie-arg.firebaseapp.com",
  projectId: "indie-arg",
  storageBucket: "indie-arg.appspot.com",
  messagingSenderId: "394169536591",
  appId: "1:394169536591:web:b5010746afc7f9eff7da3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//FIREBASEND

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
