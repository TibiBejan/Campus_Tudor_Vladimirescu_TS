import { createRole, deleteRole, getDeletedRole, getDeletedRoles, getRole, getRoles, replaceRole, restoreRole, updateRole } from '@api/v1/controllers/role.controller';
import { validatorMiddleware } from '@api/v1/middlewares';
import { Router } from "express";

const roleRouter: Router = Router();

roleRouter.post('/', 
    validatorMiddleware('rolePOST', 'body'), 
    createRole
);

roleRouter.get('/trashcan', getDeletedRoles);
roleRouter.get('/trashcan/:roleId', 
    validatorMiddleware('rolePARAMS', 'params'), 
    getDeletedRole
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
roleRouter.patch('/trashcan/:roleId',
    validatorMiddleware('rolePARAMS', 'params'), 
    restoreRole
);

roleRouter.put('/:roleId', 
    validatorMiddleware('rolePARAMS', 'params'), 
    validatorMiddleware('rolePUT', 'body'), 
    replaceRole
);

roleRouter.delete('/:roleId?permanent', 
    validatorMiddleware('rolePARAMS', 'params'), 
    validatorMiddleware('roleQUERY', 'query'),
    deleteRole
);
roleRouter.delete('/:roleId', 
    validatorMiddleware('rolePARAMS', 'params'), 
    deleteRole
);

export default roleRouter;