import { ValidatorObject } from '@api/v1/interfaces/types/validatorHandler.type';
import { CreateRoleSchema, PatchRoleSchema, PutRoleSchema, RoleParamsSchema, RoleQuerySchema } from './role.validator';
import { CreateSecurableSchema, PatchSecurableSchema, PutSecurableSchema, SecurableParamsSchema, SecurableQuerySchema } from './securable.validator';

const validators: ValidatorObject = {
    rolePOST: CreateRoleSchema,
    rolePATCH: PatchRoleSchema,
    rolePUT: PutRoleSchema,
    rolePARAMS: RoleParamsSchema,
    roleQUERY: RoleQuerySchema,
    securablePOST: CreateSecurableSchema,
    securablePATCH: PatchSecurableSchema,
    securablePUT: PutSecurableSchema,
    securablePARAMS: SecurableParamsSchema,
    securableQUERY: SecurableQuerySchema,
}

export default validators;

