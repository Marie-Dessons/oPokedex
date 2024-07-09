import { Type } from '../models/index.js';

const typeController = {
    async getOneType(req, res) {
        const type = await Type.findByPk(req.params.id);
        if (!type) {
            res.status(404).json({ message: 'Type not found' });
            return;
        }
        res.json(type);
    },
    async getAllTypes(req, res) {
        const types = await Type.findAll();
        res.json(types);
    },  
};
export { typeController };