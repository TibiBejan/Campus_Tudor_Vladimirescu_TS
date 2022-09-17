import morgan from 'morgan';
import logger from '@api/v1/helpers/logger.helper';
import environmentConstants from '@config/constants';

const stream = {
    /*
    * Use the http severity
    */
    write: (message: string) => logger.http(message),
};

const skip = () => {
    const env = environmentConstants.env || "development";
    return env !== "development";
};

const morganMiddleware = morgan(
    /*
    * Define message format string (this is the default one).
    * The message format is made from tokens, and each token is defined inside the Morgan library.
    * You can create your custom token to show what do you want from a request.
    */

    ":remote-addr :method :url :status :res[content-length] - :response-time ms",

    /*
    * Options: in this case, I overwrote the stream and the skip logic.
    *  See the methods above.
    */
    { stream, skip }
);

export default morganMiddleware;
