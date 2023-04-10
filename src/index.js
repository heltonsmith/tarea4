import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Barra from './components/Barra';
import Busqueda from './components/Busqueda';
import PostList from './components/PostList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Barra />
    <Busqueda />
    <PostList />
  </React.StrictMode>
);
