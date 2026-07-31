import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {env} from '../config/env.js'
import { UserJwtPayload } from "../types/jwt.js";


export const authenticate = (req:Request, res:Response, next:NextFunction) =>{
    try {
        const authheader = req.headers.authorization;

        if(!authheader || authheader.startsWith("Bearer ")){
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const token = authheader.split(" ")[1];

        const decoded = jwt.verify(token, env.JWT_SECRET) as UserJwtPayload;

        req.user = decoded;

        next();

    } catch (error) {
        
    }
}