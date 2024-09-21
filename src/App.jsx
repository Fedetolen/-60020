import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CardContext'; // Ruta correcta a tu archivo CardContext.jsx


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="container">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Tienda Fullstack 😎🙌" />} />
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
