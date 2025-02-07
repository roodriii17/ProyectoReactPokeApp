import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pokemonLogo from '../img/Logo.png';

function Navbar({ user, handleSignOut }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="navbar">
      <img src={pokemonLogo} alt="Pokémon Logo" />
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/pokemon">Pokémon</Link>
        <Link to="/jugar">Jugar</Link>
      </nav>
      {user ? (
        <div>
          <p>Bienvenido, {user.email}</p>
          <button onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={handleLoginClick}>Iniciar sesión o registrarse</button>
      )}
    </header>
  );
}

export default Navbar;
