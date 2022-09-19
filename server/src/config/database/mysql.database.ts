import environmentConstants from '@config/constants';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, UserRole, Role, RoleSecurable, Securable } from '@api/v1/models';

const AppDataSource = new DataSource({
    type: "mysql",
    host: environmentConstants.mysqlHost,
    port: environmentConstants.mysqlPort,
    username: environmentConstants.mysqlUser,
    password: environmentConstants.mysqlPassword,
    database: environmentConstants.mysqlDatabase,
    synchronize: true,
    logging: true,
    entities: [
        User,
        UserRole,
        Role,
        RoleSecurable,
        Securable
    ],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;