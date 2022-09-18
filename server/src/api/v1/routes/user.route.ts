import { Router } from 'express';
import { getUser } from '@api/v1/controllers/user.controller';

const userRouter: Router = Router();


userRouter.get('/', getUser);


export default userRouter;