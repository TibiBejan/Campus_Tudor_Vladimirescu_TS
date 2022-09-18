import 'reflect-metadata';
import { DataSource } from 'typeorm';
import environmentConstants from '@config/constants';

const AppDataSource = new DataSource({
    type: "mysql",
    host: environmentConstants.mysqlHost,
    port: environmentConstants.mysqlPort,
    username: environmentConstants.mysqlUser,
    password: environmentConstants.mysqlPassword,
    database: environmentConstants.mysqlDatabase,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;