import { Team } from '../models/index.js';

const teamController = {
    async getTeams(req, res) {
        const teams = await Team.findAll();
        res.json(teams);
    },
    async getOneTeam(req, res) {
        const team = await Team.findByPk(req.params.id);
        res.json(team);
    },
};


export { teamController };