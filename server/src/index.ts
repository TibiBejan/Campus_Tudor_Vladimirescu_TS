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

app.listen(port, (): void => {
    logger.info(`Server is running on port ${environmentConstants.port || 8002}`);
});