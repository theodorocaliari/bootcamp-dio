const tabgroup = document.querySelector(".pokemon__tabgroup");
const tabsLiList = tabgroup.querySelectorAll("li");

tabgroup.addEventListener("click", (e) => {
  const el = e.target;

  if (el.nodeName.toLowerCase() === "li") {
    for (let li of tabsLiList) {
      li.removeAttribute("class");
    }

    el.classList.add("active");
    const elLink = el.getAttribute("link-with");
    tabContentConnect(elLink);
  }
});

function tabContentConnect(linkword) {
  const tabBodyList = tabgroup.querySelectorAll(".pokemon__tab-body");
  //console.log(linkword);

  for (let tabbody of tabBodyList) {
    tabbody.classList.remove("active");
    if (linkword === tabbody.getAttribute("tab-link")) {
      tabbody.classList.add("active");
    }
  }
}

function filterSelectedPokemon(accumulador, pokemon) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlPokemon = urlParams.get("pokemon");

  if (pokemon.name === urlPokemon) {
    return pokemon;
  }
  return accumulador;
}

pokeApi
  .getPokemons(offset, limit)
  .then((pokemons = []) => {
    //debugger;
    const pokemonSelecionado = pokemons.reduce(filterSelectedPokemon, 0);
    return pokemonSelecionado;
  })
  .then((pokemon) => {
    const headerInjection = document.getElementById("header-injection");
    const bodyInjection = document.getElementById("body-injection");
    const tableStatsInjection = document.getElementById("table-stats");
    headerInjection.innerHTML = pokemonDetailHeader(pokemon);
    tableStatsInjection.innerHTML = pokemonStatsHtml(pokemon);
  });

//const headerDetail = document.querySelector("");

function pokemonDetailHeader(pokemon) {
  return `
  <div class="pokemon__header" poketype="${pokemon.type}">
  <div class="pokemon__control">
    <a href="#" onclick="history.back()" class="btn-back">
      <i class="mdi mdi-arrow-left"></i>
    </a>
    <div class="btn-heart">
      <i class="mdi mdi-cards-heart-outline"></i>
    </div>
  </div>
  <div class="pokemon__header--grid">
    <div class="name-types">
      <div class="pokemon__name">${pokemon.name}</div>
      <ol class="pokemon__types">
      ${pokemon.types.map((type) => `<li class="pokemon__type ${type}">${type}</li>`).join("")}
      </ol>
    </div>
    <div class="number">
      <div class="pokemon__number">#${pokemon.number}</div>
    </div>
  </div>

  <div class="pokemon__photo">
    <img src="${pokemon.photo}" alt="${pokemon.name}" />
  </div>
</div>
  `;
}

function pokemonDetailBody(pokemon) {}

function totalStats(pokemon) {
  const totalStats = pokemon.stats.reduce((acc, { stat, value }) => {
    return (acc += value);
  }, 0);

  return totalStats;
}

function pokemonStatsHtml(pokemon) {
  const pokemonStatList = pokemon.stats
    .map(({ stat, value }) => {
      return `
    <tr>
      <td>${stat}</td>
      <td>${value}</td>
      <td>
        <div class="progress-bar">
          <div class="progress-bar__bg"></div>
          <div class="progress-bar__bar ${pokemon.type}" style="width:${value}%; --width:${value}%;"></div>
        </div>
      </td>
    </tr>
  `;
    })
    .join("");
  return pokemonStatList;
}
