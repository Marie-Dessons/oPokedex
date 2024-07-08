import 'dotenv/config';

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.PG_URL, {
    dialect: 'postgres',
    define: {
        underscored: true,
    },
});

export { sequelize };