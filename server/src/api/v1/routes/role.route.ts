import { createRole, deleteRole, getRole, getRoles, replaceRole, updateRole } from '@api/v1/controllers/role.controller';
import { validatorMiddleware } from '@api/v1/middlewares';
import { Router } from "express";

const roleRouter: Router = Router();

roleRouter.post('/', 
    validatorMiddleware('rolePOST', 'body'), 
    createRole
);
roleRouter.get('/', getRoles);
roleRouter.get('/:roleId', 
    validatorMiddleware('rolePARAMS', 'params'), 
    getRole
);
roleRouter.patch('/:roleId', 
    validatorMiddleware('rolePARAMS', 'params'), 
    validatorMiddleware('rolePATCH', 'body'), 
    updateRole
);
roleRouter.put('/:roleId', 
    validatorMiddleware('rolePARAMS', 'params'), 
    validatorMiddleware('rolePUT', 'body'), 
    replaceRole
);
roleRouter.delete('/:roleId', 
    validatorMiddleware('rolePARAMS', 'params'), 
    deleteRole
);

export default roleRouter;