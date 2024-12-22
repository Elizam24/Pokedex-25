import { Link } from 'react-router-dom';
import Filters from '../components/pokedex/Filters';
import { useFetch } from '../hooks/useFetch';
import PokemonList from '../components/pokedex/PokemonList';
import PokemonCard from '../components/pokedex/PokemonCard';
import Search from '../components/pokedex/Search';
import { useNameContext } from '../contexts/nameContext';
import { useState, useEffect } from 'react';
import '../styles/Pokedex.css';
function Pokedex() {
  const { name } = useNameContext();
  const [pokemons, setPokemons] = useFetch();
  const [pokemonUrl, setPokemonUrl] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  // Obtener la lista inicial de pokemones al montar el componente
  useEffect(() => {
    getPokemon();
  }, []);

  // Función para obtener la lista inicial de pokemones
  const getPokemon = () => {
    setPokemons('https://pokeapi.co/api/v2/pokemon');
  };

  // Manejo de búsqueda por nombre
  const handleSearch = (value) => {
    if (!value) {
      setIsFiltering(false);
      setPokemonUrl(null);
      setPokemons('https://pokeapi.co/api/v2/pokemon');
    } else {
      setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}`); 
    }
  };

  // Manejo de filtro por tipo
  const handleTypeFilter = (type) => {
    if (!type) {
      setIsFiltering(false);
      setPokemons('https://pokeapi.co/api/v2/pokemon');
    } else {
      setIsFiltering(true);
      setPokemons(`https://pokeapi.co/api/v2/type/${type}`);
    }
  };

  // Funciones de paginación
  const onNext = () => {
    if (pokemons?.next) setPokemons(pokemons.next);
  };

  const onPrev = () => {
    if (pokemons?.previous) setPokemons(pokemons.previous);
  };

  // Crear un array con los pokemones según el estado de filtrado
  const pokemonsArray = isFiltering ? pokemons?.pokemon : pokemons?.results;

  return (
    <div className="Pokedex">
      <Link to="/">{'←'} VOLVER</Link>

      <div className="Pokedex_container">
        {/* Encabezado */}
        <div>
          <div className="pokedex_header">
            <p>
              Bienvenido Entrenador
              </p>
               <b>{name}</b>
              <p>Aquí podrás encontrar tu Pokémon favorito</p>
             </div>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="pokedex_form">
          <Search handleSearch={handleSearch} />
          <Filters handleTypeFilter={handleTypeFilter} />
        </div>

        {/* Botones de paginación */}
        <div className="buttons">
          <button onClick={onPrev} disabled={!pokemons?.previous}>
            Anterior
          </button>
          <button onClick={onNext} disabled={!pokemons?.next}>
            Siguiente
          </button>
        </div>

        {/* Lista de pokemones */}
        <div className="pokemons_cards">
          {pokemonUrl ? (
            <PokemonCard url={pokemonUrl} />
          ) : (
            <PokemonList pokemons={pokemonsArray} isFiltering={isFiltering} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
