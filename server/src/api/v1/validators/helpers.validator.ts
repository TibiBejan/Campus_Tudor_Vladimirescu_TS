import Joi from 'joi';

export const titleSchema = Joi.string().min(3).regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/).trim().messages({
    'string.base': `"Title field" should be a type of 'text.'`,
    'string.empty': `"Title field" cannot be an empty field.`,
    'string.min': `"Title field" should have a minimum length of {#limit}.`,
    'object.regex': `"Title field" must only contain alpha-numeric characters, spaces, or underscores.`
});

export const slugSchema = Joi.string().min(3).regex(/^\w+$/).trim().messages({
    'string.base': `"Slug field" should be a type of 'text.'`,
    'string.empty': `"Slug field" cannot be an empty field.`,
    'string.min': `"Slug field" should have a minimum length of {#limit}.`,
    'object.regex': `"Slug field" must only contain alpha-numeric characters and underscores.`
});

export const descriptionSchema = Joi.string().min(5).regex(/^[-@.\/#&+\w\s]*$/).trim().messages({
    'string.base': `"Description field" should be a type of 'text.'`,
    'string.empty': `"Description field" cannot be an empty field.`,
    'string.min': `"Description field" should have a minimum length of {#limit}.`,
    'object.regex': `"Description field" must only contain alpha-numeric characters and underscores, spaces, or some of the special characters.`
});

export const isActiveSchema = Joi.boolean().required().messages({
    'boolean.base': `"Is_Active field" should be a type of 'boolean.'`,
    'any.required': `"Is_Active field" is a required field.`
});

export const roleIdSchema = Joi.string().uuid().trim().messages({
    'string.base': `Id field" should be a type of 'text.'`,
    'string.empty': `"Id field" cannot be an empty field.`,
    'string.guid': `"Id field" must have a valid structure of uuid identifier.`,
})