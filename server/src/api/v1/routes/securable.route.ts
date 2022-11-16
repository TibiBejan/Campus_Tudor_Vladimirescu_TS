import { createSecurable, deleteSecurable, getDeletedSecurable, getDeletedSecurables, getSecurable, getSecurables, replaceSecurable, restoreSecurable, updateSecurable } from '@api/v1/controllers/securable.controller';
import { validatorMiddleware } from '@api/v1/middlewares';
import { Router } from "express";

const securableRouter: Router = Router();

securableRouter.post('/', 
    validatorMiddleware('securablePOST', 'body'), 
    createSecurable
);

securableRouter.get('/trashcan', getDeletedSecurables);
securableRouter.get('/trashcan/:securableId', 
    validatorMiddleware('securablePARAMS', 'params'), 
    getDeletedSecurable
);

securableRouter.get('/:securableId', 
    validatorMiddleware('securablePARAMS', 'params'), 
    getSecurable
);
securableRouter.get('/', getSecurables);

securableRouter.patch('/:securableId', 
    validatorMiddleware('securablePARAMS', 'params'), 
    validatorMiddleware('securablePATCH', 'body'), 
    updateSecurable
);
securableRouter.patch('/trashcan/:securableId',
    validatorMiddleware('securablePARAMS', 'params'), 
    restoreSecurable
);

securableRouter.put('/:securableId', 
    validatorMiddleware('securablePARAMS', 'params'), 
    validatorMiddleware('securablePUT', 'body'), 
    replaceSecurable
);

securableRouter.delete('/:securableId?permanent', 
    validatorMiddleware('securablePARAMS', 'params'), 
    validatorMiddleware('securableQUERY', 'query'),
    deleteSecurable
);
securableRouter.delete('/:securableId', 
    validatorMiddleware('securablePARAMS', 'params'), 
    deleteSecurable
);

export default securableRouter;
