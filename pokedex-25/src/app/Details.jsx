import { useParams, Link } from 'react-router-dom';

import { useEffect } from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import { useFetch } from '../hooks/useFetch';
import '../styles/details.css';

function Details() {
  const [pokemon, setPokemon] = useFetch();
  const params = useParams();

  // Obtener los datos del Pokémon al cargar o cambiar el nombre en los parámetros
  useEffect(() => {
    if (params.name) {
      getPokemon();
    }
  }, [params.name]);

  const getPokemon = () => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  };

  return (
    <div className="details">
      {/* Botón para volver */}
      <Link to="/pokedex" className="details__back">
        <FiCornerUpLeft /> {'←'} Volver
      </Link>

      {/* Detalles del Pokémon */}
      <div className="details__content">
        {/* Imagen del Pokémon */}
        <div className="details__image">
          <img
            src={pokemon?.sprites?.other?.dream_world?.front_default || ''}
            alt={pokemon?.name || 'Pokémon'}
          />
        </div>

        {/* Información básica */}
        <div className="details__info">
          <span className="details__id">
            #{pokemon?.id?.toString().padStart(3, '0') || '---'}
          </span>
          <h2 className="details__name">{pokemon?.name || 'Desconocido'}</h2>
        </div>

        {/* Peso y altura */}
        <div className="details__metrics">
          <span>
            <strong>Peso:</strong> {pokemon?.weight || 'N/A'}
          </span>
          <div className="details__metrics1">
          <span>
            <strong>Altura:</strong> {pokemon?.height || 'N/A'}
          </span>
        </div>
        </div>

        {/* Tipos */}
        <div className="details__types">
          <h3>Tipo</h3>
          <div>
            {pokemon?.types?.map((typeData) => (
              <span key={typeData.type.name}>{typeData.type.name}</span>
            ))}
          </div>
        </div>

        {/* Habilidades */}
        <div className="details__abilities">
          <h3>Habilidades</h3>
          <div>
            {pokemon?.abilities?.map((abilityData) => (
              <span key={abilityData.ability.name}>
                {abilityData.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
