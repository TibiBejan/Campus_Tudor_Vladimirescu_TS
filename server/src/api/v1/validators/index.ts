import { ValidatorObject } from '@api/v1/interfaces/types/validatorHandler.type';
import { CreateRoleSchema, PatchRoleSchema, PutRoleSchema, RoleParamsSchema } from './role.validator';

const validators: ValidatorObject = {
    rolePOST: CreateRoleSchema,
    rolePATCH: PatchRoleSchema,
    rolePUT: PutRoleSchema,
    rolePARAMS: RoleParamsSchema,
}

export default validators;

