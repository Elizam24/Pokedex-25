import PokemonCard from "./PokemonCard"
//import '.
function PokemonList ({pokemons,isFiltering}) {
    
return (
    <>
   {
    pokemons?.map(pokemon => {
     const pokemonName = isFiltering ? pokemon.pokemon.name : pokemon.name
      const pokemonUrl = isFiltering ? pokemon.pokemon.url : pokemon.url
        return(
       <PokemonCard key={pokemonName} url={pokemonUrl}/>
       )
        
    })

  }

 </>

) 

}
export default PokemonList