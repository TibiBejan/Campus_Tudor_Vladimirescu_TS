import { Router } from "express";
import { createRole, getRole, getRoles, updateRole, deleteRole } from '@api/v1/controllers/role.controller';


const roleRouter: Router = Router();

roleRouter.post('/', createRole);
roleRouter.get('/', getRoles);
roleRouter.get('/:id', getRole);
roleRouter.patch('/:id', updateRole);
roleRouter.delete('/:id', deleteRole);

export default roleRouter;