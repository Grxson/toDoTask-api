import express from 'express';
import { createToDo, getToDos, updateToDo, deleteToDo } from '../controllers/toDo.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', createToDo);
router.get('/', getToDos);
router.put('/:toDoId', updateToDo);
router.delete('/:toDoId', deleteToDo);

export default router;