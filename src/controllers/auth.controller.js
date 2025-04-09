import User from '../models/user.model.js';
import { ApiError } from '../errors/ApiError.js';
import { generateToken } from '../utils/generateToken.js';


export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const exist = await User.findOne({ email });
        if (exist) return next(new ApiError(400, 'El usuario ya existe'));

        const user = await User.create({ name, email, password });
        const token = generateToken(user._id);
        res.cookie('token', token, { httpOnly: true, sameSite: 'lax' });
        res.status(201).json({ messahe: 'Usuario Creado' })
    } catch (error) {
        next(error);
    }
}


export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user || !(await user.comparePassword(password))) {
            throw new ApiError(401, 'Credenciales Incorrectas')
        }

        const token = generateToken(user._id);
        res.cookie('token', token, { httpOnly: true, sameSite: 'lax' });
        res.json({ message: 'Inicio de Sesión Exitoso' })
    } catch (error) {
        next(error);
    }
}