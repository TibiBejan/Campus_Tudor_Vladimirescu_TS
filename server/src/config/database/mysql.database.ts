import environmentConstants from '@config/constants';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, UserRole, Role, RoleSecurables, Securables } from '@api/v1/models';

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