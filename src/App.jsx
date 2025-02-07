import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Login } from './components/Login';
import { RutasPrivadas } from './components/RutasPrivadas';
import Pokemon from './components/Pokemon';
import { LandingPage } from './components/LandingPage';
import { Error404 } from './components/Error404';
import { Recordatorio } from './components/Jugar';
import Navbar from './components/Navbar';
import PokemonDetail from './components/Pokemondetalles';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <AppContent user={user} />
    </BrowserRouter>
  );
}

function AppContent({ user }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('User signed out');
      navigate('/'); // Redirigir a la página de inicio después de cerrar sesión
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pokemon" element={<RutasPrivadas user={user}><Pokemon /></RutasPrivadas>} />
        <Route path="/jugar" element={<RutasPrivadas user={user}><Recordatorio /></RutasPrivadas>} />
        <Route path="/detalle/:idPokemon" element={<PokemonDetail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;