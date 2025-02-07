import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetail() {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error fetching Pokémon details:', error));
  }, [idPokemon]);

  if (!pokemon) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
      <p>Tipo: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <p>Habilidades: {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetail;