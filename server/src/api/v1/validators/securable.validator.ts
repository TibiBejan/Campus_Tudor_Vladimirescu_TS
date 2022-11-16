import { ISecurableBody, ISecurableBodyWithRole, ISecurableParams, ISecurableQuery } from '@api/v1/interfaces/securable.interface';
import Joi from 'joi';
import { descriptionSchema, idSchema, isActiveSchema, slugSchema, titleSchema } from './helpers.validator';

export const CreateSecurableSchema: Joi.ObjectSchema = Joi.object<ISecurableBodyWithRole>({
    roleId: idSchema.required().messages({
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

export const PatchSecurableSchema: Joi.ObjectSchema = Joi.object<ISecurableBody>({
    title: titleSchema,
    slug: slugSchema,
    description: descriptionSchema,
    is_active: isActiveSchema
});

export const PutSecurableSchema: Joi.ObjectSchema = Joi.object<ISecurableBody>({
    title: titleSchema.required().messages({
        'any.required': `"Title field" is a required field.`,
    }),
    slug: slugSchema.required().messages({
        'any.required': `"Slug field" is a required field.`,
    }),
    description: descriptionSchema.required().messages({
        'any.required': `"Description field" is a required field.`,
    }),
    is_active: isActiveSchema.required().messages({
        'any.required': `"Is_Active field" is a required field.`,
    })
});

export const SecurableParamsSchema = Joi.object<ISecurableParams>({
    securableId: idSchema.required().messages({
        'any.required': `"Id field" is a required field in order to identify the resource.`
    })
});

export const SecurableQuerySchema = Joi.object<ISecurableQuery>({
    permanent: Joi.boolean().messages({
        'boolean.base': `"Permanent query parameter" should have a type of 'boolean.'`,
    })
});