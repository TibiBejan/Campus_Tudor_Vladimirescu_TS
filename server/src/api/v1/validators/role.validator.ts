import { IRoleBody, IRoleParams } from '@api/v1/interfaces/role.interface';
import Joi from 'joi';

export const RoleSchema: Joi.ObjectSchema = Joi.object<IRoleBody>({
    title: Joi.string().alphanum().min(3).required().messages({
        'string.base': `"Title field" should be a type of 'text.'`,
        'string.empty': `"Title field" cannot be an empty field.`,
        'string.alphanum': `"Title field" must only contain alpha-numeric characters.`,
        'string.min': `"Title field" should have a minimum length of {#limit}.`,
        'any.required': `"Title field" is a required field.`
    }),
    slug: Joi.string().alphanum().min(3).required().messages({
        'string.base': `"Slug field" should be a type of 'text.'`,
        'string.empty': `"Slug field" cannot be an empty field.`,
        'string.alphanum': `"Slug field" must only contain alpha-numeric characters.`,
        'string.min': `"Slug field" should have a minimum length of {#limit}.`,
        'any.required': `"Slug field" is a required field.`
    }),
    description: Joi.string().min(5).messages({
        'string.base': `"Description field" should be a type of 'text.'`,
        'string.empty': `"Description field" cannot be an empty field.`,
        'string.min': `"Description field" should have a minimum length of {#limit}.`
    }),
    is_active: Joi.boolean().required().messages({
        'boolean.base': `"Is_Active field" should be a type of 'boolean.'`,
        'any.required': `"Is_Active field" is a required field.`
    }),
});

export const RoleParamsSchema = Joi.object<IRoleParams>({
    roleId: Joi.string().uuid().required().messages({
        'string.base': `Id field" should be a type of 'text.'`,
        'string.empty': `"Id field" cannot be an empty field.`,
        'string.guid': `"Id field" must have a valid structure of uuid identifier.`,
        'any.required': `"Id field" is a required field in order to identify the resource.`
    }),
});