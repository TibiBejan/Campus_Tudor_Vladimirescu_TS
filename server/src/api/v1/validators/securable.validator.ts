import { ISecurableBody } from '@api/v1/interfaces/securable.interface';
import Joi from 'joi';
import { descriptionSchema, isActiveSchema, roleIdSchema, slugSchema, titleSchema } from './helpers.validator';

export const CreateSecurableSchema: Joi.ObjectSchema = Joi.object<ISecurableBody>({
    roleId: roleIdSchema.required().messages({
        'any.required': `"Id field" is a required field in order to identify the resource.`
    }),
    resource: Joi.object({
        title: titleSchema.required().messages({
            'any.required': `"Title field" is a required field.`,
        }),
        slug: slugSchema.required().messages({
            'any.required': `"Slug field" is a required field.`,
        }),
        description: descriptionSchema,
        is_active: isActiveSchema.required().messages({
            'any.required': `"Is_Active field" is a required field.`,
        })
    }),
});