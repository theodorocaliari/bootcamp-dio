const tabgroup = document.querySelector(".pokemon__tabgroup");
const tabsLiList = tabgroup.querySelectorAll("li");
const pokedexDetail = document.querySelector(".pokedex");

const pokemonDetailHtml = (pokemon) => `
  <div class="pokemon pokemondetail">
    <div class="pokemon__header" poketype="${pokemon.type}">
      <div class="pokemon__control">
        <div class="btn-back">
          <i class="mdi mdi-arrow-left"></i>
        </div>
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
    <div class="pokemon__body">
      <div class="pokemon__tabgroup">
        <ul class="pokemon__tabs">
          <li link-with="about" class="active">About</li>
          <li link-with="base-stats">Base Stats</li>
          <li link-with="evolution">Evolution</li>
          <li link-with="moves">Moves</li>
        </ul>
        <div class="pokemon__tabcontent">
          <div class="pokemon__tab-body active" tab-link="about">
            <table border="0" width="100%">
              <tr>
                <td>Species</td>
                <td>Seed</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>2' 3.6" (0.70cm)</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>15.2 lbs (6.9 kg)</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>Overfrow, Chiorophyl</td>
              </tr>
            </table>

            <h5 class="title">Breeding</h5>
            <table border="0" width="100%">
              <tr>
                <td>Gender</td>
                <td>
                  <ul class="pokemon__gender">
                    <li>
                      <i class="mdi mdi-gender-male"></i>
                      87.5%
                    </li>
                    <li>
                      <i class="mdi mdi-gender-female"></i>
                      12.5%
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Egg Groups</td>
                <td>Monster</td>
              </tr>
              <tr>
                <td>Egg Cycle</td>
                <td>Grass</td>
              </tr>
            </table>
          </div>
          <div class="pokemon__tab-body" tab-link="base-stats">
            <table>
              <tr>
                <td>HP</td>
                <td>45</td>
                <td>progressbar</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>60</td>
                <td>progressbar</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>48</td>
                <td>progressbar</td>
              </tr>
              <tr>
                <td>Sp. Atk</td>
                <td>68</td>
                <td>progressbar</td>
              </tr>
              <tr>
                <td>Sp. Def</td>
                <td>65</td>
                <td>progressbar</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>45</td>
                <td>progressbar</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>317</td>
                <td>progressbar</td>
              </tr>
            </table>
            <h5 class="title">Type defenses</h5>
            <p>The effectiveness of each type on Chamander.</p>
          </div>
          <div class="pokemon__tab-body" tab-link="evolution">
            <p>evolution</p>
          </div>
          <div class="pokemon__tab-body" tab-link="moves">
            <p>moves</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

tabgroup.addEventListener("click", (e) => {
  const el = e.target;

  if (el.nodeName === "LI") {
    for (let li of tabsLiList) {
      li.removeAttribute("class");
    }

    el.classList.add("active");

    const elLink = el.getAttribute("link-with");
    findTabContent(elLink);
  }

  promisseLoadPokemon();
  //console.log(el);
});

function findTabContent(linkword) {
  const tabBodyList = tabgroup.querySelectorAll(".pokemon__tab-body");
  //console.log(linkword);

  for (let tabbody of tabBodyList) {
    tabbody.classList.remove("active");
    if (linkword === tabbody.getAttribute("tab-link")) {
      tabbody.classList.add("active");
    }
  }
}

function promisseLoadPokemon() {
  pokeApi.getPokemonDetail().then((pokemon) => {
    pokedexDetail.innerHTML = pokemonDetailHtml(pokemon);
    console.log(pokemon);
  });
}
