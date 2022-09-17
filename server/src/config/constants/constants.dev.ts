export default {
    logs: 'dev',
    mysqlHost: process.env.MYSQL_HOST_DEV,
    mysqlUser: process.env.MYSQL_USER_DEV,
    mysqlPassword: process.env.MYSQL_PWD_DEV,
    mysqlDatabase: process.env.MYSQL_DB_NAME_DEV,
    redisHost: process.env.REDIS_HOST_DEV,
    redisUser: process.env.REDIS_USER_DEV,
    redisPassword: process.env.REDIS_PWD_DEV,
    redisDatabase: process.env.REDIS_DB_NAME_DEV,
}