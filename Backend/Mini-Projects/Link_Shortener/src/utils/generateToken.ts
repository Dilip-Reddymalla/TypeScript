import jwt from "jsonwebtoken"
import {env} from "../config/env.js"

interface TokenPayload  {
    id: string;
    email: string;
    tier: "free" | "premium";
}

export const generateToken = (payload: TokenPayload) => {
    return jwt.sign(payload, env.JWT_SECRET as jwt.Secret, {
        expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"],
    })
}