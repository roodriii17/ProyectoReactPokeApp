import React from 'react';
import { Link } from 'react-router-dom';

export function Error404() {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}