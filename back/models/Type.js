import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/sequelize.js';

class Type extends Model {}

Type.init(
    {   
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
        tableName: 'type',
        timestamps: false,
});

export { Type };