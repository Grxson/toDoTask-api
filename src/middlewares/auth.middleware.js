import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { ApiError } from '../errors/ApiError.js';

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return next(new ApiError(401, 'No Autorizado'));

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        if (!req.user) return next(new ApiError(401, 'Usuario no encontrado'));
    } catch (error) {
        return next(new ApiError(401, 'Token no valido'));
    }

}