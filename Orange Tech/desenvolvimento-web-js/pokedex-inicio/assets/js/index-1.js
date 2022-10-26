function convertPokemonTypeToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="pokemon__type">${typeSlot.type.name}</li>`);
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon" poketype="grass">
      <span class="pokemon__number">#${pokemon.order}</span>
      <span class="pokemon__name">${pokemon.name}</span>
      <div class="pokemon__detail">
        <ol>
          ${convertPokemonTypeToLi(pokemon.types).join("")}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
      </div>
    </li>
  `;
}

const pokemonList = document.querySelector(".pokemons");

pokeApi.getPokemons().then((pokemons = []) => {
  //debugger;
  pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("");
});
