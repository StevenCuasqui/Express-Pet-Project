import {Sequelize} from "sequelize-typescript"
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
export const sequelize = config.url ? new Sequelize(config.url, config) : new Sequelize(config.database, config.username, config.password, {
   host: config.host,
   dialect: config.dialect,
   models: [__dirname + '/models'] 
});
