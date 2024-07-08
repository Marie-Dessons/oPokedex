import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/sequelize.js';

class Team extends Model {}

Team.init(
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
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
        tableName: 'team',
        timestamps: false,
});

export { Team };