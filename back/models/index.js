import { Pokemon } from './Pokemon.js';
import { PokemonHasType } from './PokemonHasType.js';
import { Team } from './Team.js';
import { TeamHasPokemon } from './TeamHasPokemon.js';
import { Type } from './Type.js';

//* Pokemon et Type 

// Relation Many-to-Many entre Pokemon et Type
Pokemon.belongsToMany(Type, {
    through: PokemonHasType,
    foreignKey: 'pokemon_id',
    otherKey: 'type_id',
    as: 'types',
});

Type.belongsToMany(Pokemon, {
    through: PokemonHasType,
    foreignKey: 'type_id',
    otherKey: 'pokemon_id',
    as: 'pokemons',
});

//* Team et Pokemon

// Relation Many-to-Many entre Team et Pokemon
Team.belongsToMany(Pokemon, {
    through: TeamHasPokemon,
    foreignKey: 'team_id',
    otherKey: 'pokemon_id',
    as: 'pokemons',
});

Pokemon.belongsToMany(Team, {
    through: TeamHasPokemon,
    foreignKey: 'pokemon_id',
    otherKey: 'team_id',
    as: 'teams',
});

export { Pokemon, PokemonHasType, Team, TeamHasPokemon, Type };
