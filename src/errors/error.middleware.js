import { ApiError } from "./ApiError.js";

export function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500;
    res.status(status).json({
        status: err.status || 'error',
        message: err.message || 'Error Interno del Servidor',
    })
}