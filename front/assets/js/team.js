import { api } from "./api.js";

// Fonction pour afficher toutes les équipes
async function showAllTeams() {
    const teamTemplate = document.getElementById("team-list-item");
    const teamContainer = document.getElementById("team-container");
    teamContainer.textContent = "";

    const allTeams = await api.fetchAllTeams();

    allTeams.forEach((team) => {
        const clone = document.importNode(teamTemplate.content, true);
        const teamName = clone.querySelector(".team-name");
        teamName.textContent = team.name;
        const teamDescription = clone.querySelector(".team-description");
        teamDescription.textContent = team.description;
        const teamBtn = clone.querySelector(".btnModalTeam");
        teamBtn.dataset.id = team.id;
        teamBtn.href = `/team/${team.id}`;
        teamBtn.addEventListener("click", getTeamModal);
        teamContainer.appendChild(clone);
    });

}
async function getTeamModal(event) {
    event.preventDefault();

    const teamId = event.currentTarget.dataset.id;
    const teamModal = document.querySelector("#team_modal");
    teamModal.classList.add("is-active");

    const team = await api.fetchOneTeam(teamId);
    teamModal.dataset.id = teamId;

    teamModal.querySelector(".team_name").textContent = team.name;
    teamModal.querySelector(".team_description").textContent = team.description;

    const templatePkmRow = document.getElementById("template-row-table");
    const tablePkm = document.querySelector(".table");
    tablePkm.textContent = "";
    
    team.pokemons.forEach((pokemon) => {
        const clone = document.importNode(templatePkmRow.content, true);

        const numPkm = clone.querySelector('[slot="id"]').textContent = pokemon.id;
        const namePkm = clone.querySelector('[slot="name"]').textContent = pokemon.name;
        const hpPkm = clone.querySelector(' [slot="hp"]').textContent = pokemon.hp;
        const atkPkm = clone.querySelector(' [slot="atk"]').textContent = pokemon.atk;
        const defPkm = clone.querySelector(' [slot="def"]').textContent = pokemon.def;
        const atkSpePkm = clone.querySelector(' [slot="atk_spe"]').textContent = pokemon.atk_spe;
        const defSpePkm = clone.querySelector(' [slot="def_spe"]').textContent = pokemon.def_spe;
        const vitPkm = clone.querySelector(' [slot="speed"]').textContent = pokemon.speed;


        tablePkm.appendChild(clone)

    })
}


export { showAllTeams };
