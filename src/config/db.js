const { DataSource } = require('typeorm');
const config = require('./config');
const entities = require('../models/index');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.postgres.host,
  port: parseInt(config.postgres.port || '5432', 10),
  username: config.postgres.user,
  password: config.postgres.password,
  database: config.postgres.database,
  synchronize: true,
  logging: false,
  entities: Object.values(entities),
  subscribers: [],
  migrations: [],
});

module.exports = AppDataSource;
