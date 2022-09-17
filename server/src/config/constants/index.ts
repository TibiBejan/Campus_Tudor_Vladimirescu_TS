// Import dotenv
import dotenv from 'dotenv';
dotenv.config();

// Import all constants from env: common, env, prod
import common from './constants.common';
import dev from './constants.dev';
import prod from './constants.prod';

const getEnvironmentSpecificConstants = (env: string | undefined) => {
    switch (env) {
        case 'development':
            return dev;
        case 'production':
            return prod;
        default:
            throw new Error(`No matching constants file found for environment: ${env}`);
    }
}

const environmentConstants = Object.assign(common, getEnvironmentSpecificConstants(process.env.NODE_ENV));

export default Object.freeze(environmentConstants);