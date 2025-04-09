import ToDo from "../models/toDo.model.js";
import { ApiError } from "../errors/ApiError.js";

// Crear tarea por hacer
export const createToDo = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const toDo = new ToDo({
            title,
            description,
            user: req.user._id,
        });

        await toDo.save();
        res.status(201).json({ message: 'Tarea creada', toDo });
    } catch (error) {
        next(new ApiError(500, 'Error al crear la tarea'));
    }
}


export const getToDos = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, completed } = req.query;

        const query = { user: req.user._id };

        if (completed !== undefined) {
            query.completed = completed === 'true';
        }

        const toDos = await ToDo.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .sort({ createdAt: -1 }); // desde las tareas creadas recienttemente

        const total = await ToDo.countDocuments(query);

        res.status(200).json({
            data: toDos,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        })
    } catch (error) {
        next(new ApiError(500, 'Error al obtener las tareas'));
    }
}


export const updateToDo = async (req, res, next) => {
    try {
        const { toDoId } = req.params;
        const { title, description, completed } = req.body;

        const toDo = await ToDo.findByIdAndUpdate(
            toDoId,
            { title, description, completed },
            { new: true }
        );

        if (!toDo) return next(new ApiError(404, 'Tarea no encontrada'));

        res.status(200).json({ message: 'Tarea actualizada', toDo });
    } catch (error) {
        next(new ApiError(500, 'Error al actualizar la tarea'));
    }
}

export const deleteToDo = async (req, res, next) => {
    try {
        const { toDoId } = req.params;
        const toDo = await ToDo.findByIdAndDelete(toDoId);

        if (!toDo) return next(new ApiError(404, 'Tarea no encontrada'));

        res.status(200).json({ message: 'Tarea eliminada' });


    } catch (error) {
        next(new ApiError(500, 'Error al eliminar la tarea'));
    }
}