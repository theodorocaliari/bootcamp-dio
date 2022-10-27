const pokemonList = document.querySelector(".pokemons");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const maxRecords = 151;
const limit = 12;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon" poketype="${pokemon.type}">
    <a href="detalhe-pokemon.html?name=${pokemon.name}&id=${pokemon.number}">
      <span class="pokemon__number">#${pokemon.number}</span>
      <span class="pokemon__name">${pokemon.name}</span>
      <div class="pokemon__detail">
        <ol>
          ${pokemon.types.map((type) => `<li class="pokemon__type ${type}">${type}</li>`).join("")}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}" />
      </div>
      </a>
    </li>
    
  `;
}

if (loadMoreBtn && pokemonList) {
  function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      //debugger;
      const newHtml = pokemons.map(convertPokemonToLi).join("");
      pokemonList.innerHTML += newHtml;
    });
  }

  loadPokemonItens(offset, limit);

  loadMoreBtn.addEventListener("click", () => {
    offset += limit;
    //debugger;
    const qtRecorNextPage = offset + limit;

    if (qtRecorNextPage >= maxRecords) {
      const newLimit = maxRecords - offset;
      loadPokemonItens(offset, newLimit);
      loadMoreBtn.parentElement.removeChild(loadMoreBtn);
    } else {
    }
    loadPokemonItens(offset, limit);
  });
}
