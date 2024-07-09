import { Team } from '../models/index.js';
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
        const oneTeam = await Team.findByPk(req.params.id);
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
};

export { teamController };