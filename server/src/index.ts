/*
* =========== Catch all uncaught exceptions ============
*/
process.on('uncaughtException', (err: Error) => {
    logger.debug('Uncaught Exception, shutting down the server...');
    logger.error(err);
    process.exit(1);
});

/*
* =================== Config Imports ===================
*/
import app from '@config/express.config';
import environmentConstants from '@config/constants';
/*
* ==================== API Imports =====================
*/
import { logger } from '@api/v1/helpers';

/*
* ==================== Server Init =====================
*/
const port = environmentConstants.port || 3005;

const server = app.listen(port, (): void => {
    logger.info(`Server is running on port ${environmentConstants.port || 8002}`);
});

/*
* =========== Catch all unhandled rejections ===========
*/
process.on('unhandledRejection', (err: Error) => {
    logger.debug('Unhandled Rejection, shutting down the server...');
    logger.error(err);
    server.close(() => process.exit(1));
});