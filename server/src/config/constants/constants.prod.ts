export default {
    logs: 'production',
    mysqlHost: process.env.MYSQL_HOST_PRODUCTION,
    mysqlUser: process.env.MYSQL_USER_PRODUCTION,
    mysqlPassword: process.env.MYSQL_PWD_PRODUCTION,
    mysqlDatabase: process.env.MYSQL_DB_NAME_PRODUCTION,
    redisHost: process.env.REDIS_HOST_PRODUCTION,
    redisUser: process.env.REDIS_USER_PRODUCTION,
    redisPassword: process.env.REDIS_PWD_PRODUCTION,
    redisDatabase: process.env.REDIS_DB_NAME_PRODUCTION,
}