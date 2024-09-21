import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm-leSlVFYxXN5Ah--sJKgwXAff9G9yWs",
  authDomain: "coderhouse-ecommerce-9145d.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9145d",
  storageBucket: "coderhouse-ecommerce-9145d.appspot.com",
  messagingSenderId: "504514018292",
  appId: "1:504514018292:web:b55cc1685ad023c5ea17a1"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
