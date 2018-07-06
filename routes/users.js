import { Router } from 'express';
import { createUser, findUser, deleteUser, updateUser } from '../controllers/users.Controller';

const router = Router()

router.post('/users', createUser)

router.get('/users/:name', findUser)

router.delete('/delUser/:name', deleteUser)

router.put('/updateUser/:name/:value', updateUser)

export default router
