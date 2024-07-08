import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/sequelize.js';

class TeamHasPokemon extends Model {}

TeamHasPokemon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'team', // Assurez-vous que le nom du modèle est correct
                key: 'id'
            }
        },
        pokemon_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pokemon', // Assurez-vous que le nom du modèle est correct
                key: 'id'
            }
        },
    },
    {
        sequelize,
        tableName: 'team_pokemon',
        timestamps: false, // Si vous ne voulez pas de champs createdAt et updatedAt
    }
);

export { TeamHasPokemon };