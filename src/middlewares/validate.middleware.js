import { ApiError } from "../errors/ApiError.js";

export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return next(new ApiError(400, error.errors[0].message));
    }
}