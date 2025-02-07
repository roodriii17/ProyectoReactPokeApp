import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase'; 
import './Jugar.css'; 

export function Recordatorio() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [show, setShow] = useState(true);
  const [scores, setScores] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [user, setUser] = useState(null);

  // Detectar usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Cargar Pokémon y puntuaciones
  useEffect(() => {
    fetchRandomPokemon();
    fetchScores();
  }, []);

  // Obtener un Pokémon aleatorio
  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1027) + 1; 
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      setCurrentPokemon({
        name: data.name,
        hint: `Tipo: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}, 
               Habilidades: ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}, 
               Altura: ${data.height / 10} m, 
               Peso: ${data.weight / 10} kg`,
        image: data.sprites.front_default,
      });
      setMessage('');
      setGuess('');
      setAttempts(3);
    } catch (error) {
      console.error("Error obteniendo Pokémon:", error);
    }
  };

  // Manejo del input del usuario
  const handleGuessChange = (e) => setGuess(e.target.value.toLowerCase());

  // Enviar intento del usuario
  const handleGuessSubmit = (e) => {
    e.preventDefault();
    
    if (guess === currentPokemon.name) {
      setMessage('¡Correcto! Eres una máquina');
      const newScore = userScore + 1;
      setUserScore(newScore);
      fetchRandomPokemon();
    } else {
      const newAttempts = attempts - 1;
      setAttempts(newAttempts);
      if (newAttempts > 0) {
        setMessage(`Incorrecto. Te quedan ${newAttempts} intentos.`);
      } else {
        setMessage(`Oh! Me temo que tienes que ver más la serie. El Pokémon era ${currentPokemon.name}.`);
        setAttempts(3); 
        fetchRandomPokemon(); 
      }
    }
    setGuess('');
  };

  // Guardar la puntuación en Firestore
  const saveScore = async (score) => {
    if (!user) {
      console.error('No hay usuario autenticado.');
      return;
    }

    try {
      await addDoc(collection(db, 'puntuacion'), {
        user: user.displayName || user.email, 
        score: score 
      });
      fetchScores(); 
    } catch (error) {
      console.error('Error al guardar la puntuación:', error);
    }
  };

  // Obtener las mejores puntuaciones
  const fetchScores = async () => {
    try {
      const q = query(collection(db, 'puntuacion'), orderBy('score', 'desc'), limit(3)); 
      const querySnapshot = await getDocs(q);
      const scoresData = querySnapshot.docs.map(doc => doc.data());
      setScores(scoresData);
    } catch (error) {
      console.error('Error al obtener puntuaciones:', error);
    }
  };

  // Manejar el botón de saltar Pokémon
  const handleSkipPokemon = async () => {
    if (userScore > 0) {
      await saveScore(userScore); 
      setUserScore(0); 
    }
    fetchRandomPokemon();
  };

  if (!currentPokemon) {
    return <p>Cargando...</p>;
  }

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>¿Qué Pokémon es?</h2>
        <p>Pista: {currentPokemon.hint}</p>
        <img
          src={currentPokemon.image}
          alt="Imagen del Pokémon"
          style={{ width: '200px', height: '200px' }}
        />
        <form onSubmit={handleGuessSubmit}>
          <input
            type="text"
            placeholder="Adivina el nombre del Pokémon"
            value={guess}
            onChange={handleGuessChange}
            required
            style={{ margin: '10px', padding: '5px' }}
          />
          <button type="submit" style={{ padding: '5px 10px' }}>Adivinar</button>
        </form>
        <button onClick={handleSkipPokemon} style={{ padding: '5px 10px', marginTop: '10px' }}>Saltar Pokémon</button>
        <p>{message}</p>
        <h3>Tu puntuación: {userScore}</h3>
        <h3>Ranking de puntuaciones</h3>
        <ul>
          {scores.map((score, index) => (
            <li key={index}>{score.user}: {score.score}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}