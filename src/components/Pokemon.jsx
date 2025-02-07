import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';


Modal.setAppElement('#root');

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const fetchPokemonList = (offset) => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=8`)
      .then(response => response.json())
      .then(data => {
        const promises = data.results.map(pokemon => 
          fetch(pokemon.url).then(response => response.json())
        );
        return Promise.all(promises);
      })
      .then(pokemonData => {
        setPokemonList(prevList => {
          const newPokemon = pokemonData.filter(poke => !prevList.some(prev => prev.id === poke.id));
          return [...prevList, ...newPokemon];
        });
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching Pokémon list:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemonList(offset);
  }, [offset]);

  const loadMorePokemon = () => {
    setOffset(prevOffset => prevOffset + 8);
  };

  const handleMoreInfo = (pokemon) => {
    setSelectedPokemon(pokemon);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPokemon(null);
  };

  return (
    <div className="main-content">
      <h1>Lista de Pokémon</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemonList.map((pokemon, index) => (
          <div key={`${pokemon.id}-${index}`} className="card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <button onClick={() => handleMoreInfo(pokemon)}>Saber Más</button>
          </div>
        ))}
      </div>
      {loading && <p>Cargando...</p>}
      <button onClick={loadMorePokemon} disabled={loading}>
        Ver más Pokémon
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalles del Pokémon"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          },
        }}
      >
        {selectedPokemon && (
          <div>
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            <p>Altura: {selectedPokemon.height / 10} m</p>
            <p>Peso: {selectedPokemon.weight / 10} kg</p>
            <p>Tipo: {selectedPokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            <p>Habilidades: {selectedPokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Pokemon;