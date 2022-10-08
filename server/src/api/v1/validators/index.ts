import { ValidatorObject } from '@api/v1/interfaces/types/validatorHandler.type';
import { RoleParamsSchema, RoleSchema } from './role.validator';

const validators: ValidatorObject = {
    rolePOST: RoleSchema,
    roleUPDATE: RoleSchema,
    rolePARAMS: RoleParamsSchema,
}

export default validators;

