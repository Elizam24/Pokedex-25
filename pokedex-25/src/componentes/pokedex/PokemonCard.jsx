import { Link } from "react-router-dom"; 
//import { useFetch } from "../../hooks/UseFetch"
import { useEffect, useState } from "react"; 
import '../../styles/Pokecard.css';

// Definición de los tipos de Pokémon
const tipos = {
    normal: "Normal",
    fighting: "Luchador",
    flying: "Volador",
    poison: "Veneno",
    ground: "Tierra",
    rock: "Roca",
    bug: "Bicho",
    ghost: "Fantasma",
    steel: "Acero",
    fire: "Fuego",
    water: "Agua",
    grass: "Planta",
    electric: "Eléctrico",
    psychic: "Psíquico",
    ice: "Hielo",
    dragon: "Dragón",
    dark: "Siniestro",
    fairy: "Hada",
    stellar: "Estelar",
    unknown: "Desconocido",
    shadow: "Sombra",
};

function PokemonCard({ url }) {
    const [pokemon, setPokemon] = useState(null); 

    useEffect(() => {
        if (url) {
            getPokemon();
        }
    }, [url]);

    const getPokemon = async () => {
        try {
            const response = await fetch(url); 
            const data = await response.json();
            setPokemon(data); // Actualiza el estado con los datos del Pokémon
        } catch (error) {
            console.error("Error al obtener los datos del Pokémon:", error);
        }
    };

    const types = pokemon?.types?.map((type) => type.type.name) || [];

    if(!types) return

    return (
        <Link className="poke" to={`/pokedex/${pokemon?.name}`}>
            <div className={`poke_card type--${types[0] || "default"}`}>
                <div className="poke_card-header">
                    <img
                        src={pokemon?.sprites?.other?.dream_world?.front_default || "/placeholder.png"}
                        alt={pokemon?.name || "Pokémon"}
                    />
                </div>

                <div className="poke_card-body">
                    <h2 className="poke_card-name">{pokemon?.name}</h2>
                    <span className="poke_card-types">
                        {types.map((type, index) => (
                            <span key={type}>
                                {index > 0 && " / "}
                                {tipos[type] || type}
                            </span>
                        ))}
                    </span>
                    <p className="poke_card-label">Tipo</p>

                    <div className="poke_card-stats">
                        <div className="poke_card-stats-item">
                            <span>HP</span>
                            <span>{pokemon?.stats?.[0]?.base_stat}</span>
                        </div>
                        <div className="poke_card-stats-item">
                            <span>Ataque</span>
                            <span>{pokemon?.stats?.[1]?.base_stat}</span>
                        </div>
                        <div className="poke_card-stats-item">
                            <span>Defensa</span>
                            <span>{pokemon?.stats?.[2]?.base_stat}</span>
                        </div>
                        <div className="poke_card-stats-item">
                            <span>Velocidad</span>
                            <span>{pokemon?.stats?.[5]?.base_stat}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PokemonCard;
