import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import environmentConstants from '@config/constants';

/*
* Define your severity levels.
* With them, You can create log files,
* see or hide levels based on the running ENV.
*/
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

/*
* This method set the current severity based on
* the current NODE_ENV: show all the log levels
* if the server was run in development mode; otherwise,
* if it was run in production, show only warn and error messages.
*/
const level = (): string => {
    const env = environmentConstants.env;
    return env === 'development' ? 'debug' : 'warn';
}

/*
* Define different colors for each level.
* Colors make the log message more visible
* adding the ability to focus or ignore messages.
*/
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
}

/*
* Tell winston that you want to link the colors
* defined above to the severity levels.
*/
winston.addColors(colors)

/*
* Chose the aspect of your log customizing the log format.
*/
const format: winston.Logform.Format = winston.format.combine(
    /*
    * Tell Winston that the logs must be colored
    */
    winston.format.colorize({ all: true }),
    /*
    * Add the message timestamp with the preferred format
    */
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    /*
    * Define the format of the message showing the timestamp, the level and the message
    */
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
)

/*
* Define which transports the logger must use to print out messages.
* In this example, we are using three different transports
*/
const transports = [
    /*
    * Allow to print all the error level messages inside the error.log file
    */
    new DailyRotateFile({
        filename: 'logs/%DATE%/errors.log',
        datePattern: 'DD-MMM-YYYY',
        level: 'error',
        format: winston.format.combine(winston.format.uncolorize()),
    }),
    /*
    * Allow to print all the error message inside the all.log file
    * (also the error log that are also printed inside the error.log())
    */
    new DailyRotateFile({
        filename: 'logs/%DATE%/combined.log',
        datePattern: 'DD-MMM-YYYY',
        level: 'debug',
        format: winston.format.combine(winston.format.uncolorize()),
    }),
]

/*
* Create the logger instance that has to be exported
* and used to log messages.
*/
const logger: winston.Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
    exceptionHandlers: [
        new DailyRotateFile({
            filename: 'logs/%DATE%/exception.log',
            datePattern: 'DD-MMM-YYYY',
            format: winston.format.combine(winston.format.uncolorize()),
        }),
    ],
    rejectionHandlers: [
        new DailyRotateFile({
            filename: 'logs/%DATE%/rejections.log',
            datePattern: 'DD-MMM-YYYY',
            format: winston.format.combine(winston.format.uncolorize()),
        }),
    ],
})


if (environmentConstants.env !== 'production') {
    /*
    *  Allow the use the console to print the messages
    */
    logger.add(
        new winston.transports.Console({
            format,
            level: 'debug'
        })
    )
}

export default logger;