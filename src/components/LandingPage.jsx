import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Importa los estilos para la landing page

export function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Bienvenido a la PokeApp</h1>
        <p>En esta aplicación tendrás todo acerca de Pokémon</p>
      </header>
      <main className="landing-main">
        <section className="landing-section">
          <h2>Características</h2>
          <ul>
            <li>Consulta información detallada de cada Pokémon</li>
            <li>Juega y adivina el nombre de los Pokémon</li>
            <li>Guarda tus puntuaciones y compite con otros usuarios</li>
          </ul>
        </section>
        <section className="landing-section">
          <h2>Comienza ahora</h2>
          <p>Inicia sesión o regístrate para empezar a explorar el mundo de Pokémon.</p>
          <div className="landing-buttons">
            <Link to="/login" className="landing-button">Iniciar Sesión</Link>
            <Link to="/re" className="landing-button">Registrarse</Link>
          </div>
        </section>
      </main>
 
    </div>
  );
}