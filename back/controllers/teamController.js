import { Team, Pokemon } from '../models/index.js';
import Joi from 'joi';

const teamController = {
    async getTeams(req, res) {
        const teams = await Team.findAll();
        if (!teams) {
            res.status(404).json({ message: 'Aucune équipe n\'a été trouvée' });
        }
        res.json(teams);
    },
    async getOneTeam(req, res) {
        const id = req.params.id;
        const oneTeam = await Team.findByPk(id, { include: ['pokemons'] });
        if (!oneTeam) {
            res.status(404).json({ message: 'Aucune équipe n\'a été trouvée' });
        }
        res.json(oneTeam);
    },
    async createTeam(req, res, next) {
        // validation
        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
        });

        //stopper si le body n'est pas valide
        const { error } = schema.validate(req.body);
        if (error) {
            return next(error);
        };
        //récupérer les données du body
        const {name, description} = req.body;
        const createTeam = await Team.create({name, description});

        res.status(201).json(createTeam);
    },
    async updateTeam(req, res, next) {
        const id = req.params.id;

        const { name, description } = req.body;

        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
        });

        //stopper si le body n'est pas valide
        const { error } = schema.validate(req.body);
        if (error) {
            return next(error);
        };

        const targetTeam = await Team.findByPk(id);

        if (!targetTeam) {
            res.status(404).json({ message: 'Aucune équipe n\'a été trouvée' });
        }

       const updateTeam = await targetTeam.update({name, description});

        res.json(updateTeam);
    },
    async deleteTeam(req, res, next) {
        const id = req.params.id;
        const targetTeam = await Team.findByPk(id);

        if (!targetTeam) {
            return next(error);
        }

        await targetTeam.destroy();

        res.status(204).end();
    },
    async getpokemonsteam(req, res, next) {
        // Sur le router, penser à modifier les id sur la routes
    const { teamId, pokemonId } = req.params;

    const team = await Team.findByPk(teamId, { include: 'pokemons' });
        if (!team) {   
        return next();   
        };

    const pokemon = await Pokemon.findByPk(pokemonId);
    if (!pokemon) {
        return next();
    }

    if (team.pokemons.length >= 6) {
        return res.status(400).json({ message: 'La team a déjà six Pokémons.' });
    }

    await team.addPokemon(pokemon);
    
    const updatedTeam = await Team.findByPk(teamId, { include: ['pokemons'] });
    res.status(201).json(updatedTeam);
    },

    async deletepokemonsteam(req, res, next) {
        const { teamId, pokemonId } = req.params;

        const team = await Team.findByPk(teamId, { include: 'pokemons' });
            if (!team) {   
            return next();   
            };
    
        const pokemon = await Pokemon.findByPk(pokemonId);
        if (!pokemon) {
            return next();
        }
    
        await team.removePokemon(pokemon);
    
        const updatedTeam = await Team.findByPk(teamId, { include: ['pokemons'] });
        res.status(201).json(updatedTeam);

},
};

export { teamController };