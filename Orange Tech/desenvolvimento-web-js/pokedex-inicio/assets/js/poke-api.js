const pokeApi = {};

function convertPokeApiDetailToPokemonModel(pokemonDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokemonDetail.name;
  pokemon.number = pokemonDetail.id;
  //pokemon.types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);

  //equivalencia
  const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemonModel);
};

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  //fetch retorna uma promisse
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => pokemonsDetails);
};
