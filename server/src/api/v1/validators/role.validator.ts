import { IRoleBody, IRoleParams } from '@api/v1/interfaces/role.interface';
import Joi from 'joi';
import { descriptionSchema, isActiveSchema, roleIdSchema, slugSchema, titleSchema } from './helpers.validator';

export const CreateRoleSchema: Joi.ObjectSchema = Joi.object<IRoleBody>({
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
});

export const PatchRoleSchema: Joi.ObjectSchema = Joi.object<IRoleBody>({
    title: titleSchema,
    slug: slugSchema,
    description: descriptionSchema,
    is_active: isActiveSchema
});

export const PutRoleSchema: Joi.ObjectSchema = Joi.object<IRoleBody>({
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

export const RoleParamsSchema = Joi.object<IRoleParams>({
    roleId: roleIdSchema.required().messages({
        'any.required': `"Id field" is a required field in order to identify the resource.`
    })
});