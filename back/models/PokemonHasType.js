import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/sequelize.js';


  class PokemonHasType extends Model {}

 
        PokemonHasType.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                pokemon_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'pokemon', 
                        key: 'id'
                    }
                },
                type_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'type',
                        key: 'id'
                    }
                },
            },
            {
                sequelize,
                tableName: 'pokemon_type',
                timestamps: false,  
            }
        );

    export { PokemonHasType };