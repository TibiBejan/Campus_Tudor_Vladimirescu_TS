import { createRole, deleteRole, getRole, getRoles, updateRole } from '@api/v1/controllers/role.controller';
import { validatorMiddleware } from '@api/v1/middlewares';
import { Router } from "express";

const roleRouter: Router = Router();

roleRouter.post('/', validatorMiddleware('rolePOST', 'body'), createRole);
// roleRouter.post('/', createRole);
roleRouter.get('/', getRoles);
roleRouter.get('/:id', validatorMiddleware('rolePARAMS', 'params'), getRole);
roleRouter.patch('/:id', validatorMiddleware('rolePARAMS', 'params'), validatorMiddleware('roleUPDATE', 'body'), updateRole);
roleRouter.delete('/:id', validatorMiddleware('rolePARAMS', 'params'), deleteRole);

export default roleRouter;