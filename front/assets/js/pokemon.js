import { api } from "./api.js";
import { closeModals } from "./utils.js";

async function getPokemonsList() {
  const pokemonTemplate = document.getElementById("pokemon-list-item-template modal");
  const pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.textContent = "";

  const allPokemons = await api.fetchAllPokemons();

  allPokemons.forEach((pokemon) => {
    const clone = document.importNode(pokemonTemplate.content, true);
    const pokename = clone.querySelector(".card-content");
    pokename.textContent = pokemon.name;
    const pokeimg = clone.querySelector(".pkm_img");
    pokeimg.src = `../assets/img/${pokemon.id}.webp`;
    pokeimg.alt = pokemon.name;
    const link = clone.querySelector("a");
    link.dataset.id = pokemon.id;
    link.href = `/pokemon/${pokemon.id}`; 
    link.addEventListener("click", getPokemonModal);
    pokemonContainer.appendChild(clone);

  });
  document.querySelectorAll(".modal-background, .close").forEach((element) => {
    element.addEventListener("click", closeModals);
  });
}

async function getPokemonModal(event) {
  event.preventDefault();
  const id = event.currentTarget.dataset.id;
  const pkmModal = document.querySelector("#pkm_detail");

  pkmModal.classList.add("is-active");

  const pokemon = await api.fetchOnePokemon(id);
  pkmModal.dataset.id = id;
  pkmModal.querySelector(".pkm_name").textContent = pokemon.name;
  pkmModal.querySelector(".pkm_img_modal").src = `../assets/img/${pokemon.id}.webp`;
  pkmModal.querySelector('[slot="hp"]').value = pokemon.hp;
  pkmModal.querySelector('[slot="atk"]').value = pokemon.atk;
  pkmModal.querySelector('[slot="def"]').value = pokemon.def;
  pkmModal.querySelector('[slot="atk_spe"]').value = pokemon.atk_spe;
  pkmModal.querySelector('[slot="def_spe"]').value = pokemon.def_spe;
  pkmModal.querySelector('[slot="speed"]').value = pokemon.speed;

  const pokemonTypes = pokemon.types.map((type) => type.name)
  const pokemonTypesString = pokemonTypes.join(", ");
  pkmModal
    .querySelector(".modal-card-content")
    .querySelector(".modal_team_types").textContent = pokemonTypesString;
}

export { getPokemonsList };
