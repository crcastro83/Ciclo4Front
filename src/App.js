import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './componentes/Admin';
import CrearCategoria from './componentes/CrearCategoria';
import ActualizarCategoria from './componentes/ActualizarCategoria';
import CrearCuenta from './componentes/CrearCuenta';
import Home from './componentes/Home';
import Login from './componentes/login';
import HomeProductos from './componentes/productos/HomeProductos';
import CrearProducto from './componentes/productos/CrearProducto';
import ActualizarProductos from './componentes/productos/ActualizarProductos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/crear-cuenta" exact element={<CrearCuenta/>} />
        <Route path="/admin" exact element={<Admin/>} />
        <Route path="/crear-categorias" exact element={<CrearCategoria/>} />
        <Route path="/actualizar-categoria/:idCategoria" exact element={<ActualizarCategoria/>} />
        <Route path="/actualizar-producto/:idProducto" exact element={<ActualizarProductos/>} />
        <Route path="/home-productos/:idCategoria" exact element={<HomeProductos/>} />
        <Route path="/crear-producto/:idCategoria" exact element={<CrearProducto/>} />
      
      </Routes>
    </Router>
  );
}

export default App;