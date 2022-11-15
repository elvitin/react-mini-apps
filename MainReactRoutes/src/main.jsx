import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import CalculadoraBoteco from './pages/CalculadoraBoteco';
import Home from './pages/Home';
import Todo from './pages/Todo';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/todo' element={<Todo />} />
      <Route path='/calculadora-boteco' element={<CalculadoraBoteco />} />
      <Route path='*' element={<h1>404: Not Found</h1>} />
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>
);
