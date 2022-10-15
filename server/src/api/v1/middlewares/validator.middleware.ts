import { AppError } from '@api/v1/helpers';
import { RequestStructure, ValidatorHandler } from '@api/v1/interfaces/types/validatorHandler.type';
import validators from '@api/v1/validators';
import Joi from 'joi';

const validatorMiddleware: ValidatorHandler = (schema, property) => {
    return  async (req, res, next) => {
        try {
            if(!validators.hasOwnProperty(schema)) {
                next(new AppError(`Specified schema: ${schema} does not exist on the validators declaration!`, 422, 'Validation', 'ValidationSchemaMissing'));
            }

            const requestStructure: RequestStructure = {
                body: req.body,
                params: req.params,
                query: req.query,
            }

            await validators[schema].validateAsync(requestStructure[property], {
                abortEarly: false,
            });

            next();
        }
        catch(err) {
            if (err instanceof Joi.ValidationError) {
                const { details } = err;
                const message = details.map(detail => detail.message). join(' ');
                return next(new AppError(message, 422, 'Validation', 'ValidationError'))
            }            
        }
    }
}

export default validatorMiddleware;