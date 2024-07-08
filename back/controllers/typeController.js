import { Type } from '../models/index.js';

const typeController = {
    async getOneType(req, res) {
        const type = await Type.findOne({ _id: req.params.id });
        if (!type) {
            res.status(404).json({ message: 'Type not found' });
            return;
        }
        res.json(type);
    },
    async getTypes(req, res) {
        const types = await Type.find();
        res.json(types);
    },  
};
export { typeController };