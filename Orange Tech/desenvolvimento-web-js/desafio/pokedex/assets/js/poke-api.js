const pokeApi = {};

function convertPokeApiDetailToPokemonModel(pokemonDetail) {
  const pokemon = new Pokemon();
  pokemon.name = pokemonDetail.name;
  pokemon.number = pokemonDetail.id;
  //pokemon.types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);

  //equivalencia
  const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
  const abilities = pokemonDetail.abilities.map((typeSlot) => typeSlot.ability.name);
  const [type] = types;
  const stats = pokemonDetail.stats.map((statsSlot) => {
    return { stat: statsSlot.stat.name, value: statsSlot.base_stat };
  });

  pokemon.types = types;
  pokemon.stats = stats;
  pokemon.type = type;
  pokemon.abilities = abilities;
  pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

//debugger;
pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemonModel);
};

pokeApi.getPokemons = (offset = 0, limit = 12) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  //fetch retorna uma promisse
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => pokemonsDetails);
};
