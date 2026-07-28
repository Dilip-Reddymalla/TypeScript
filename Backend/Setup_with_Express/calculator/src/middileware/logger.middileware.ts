import type { Request, Response, NextFunction } from 'express';

async function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`Method: ${req.method}, URL: ${req.originalUrl}, IP: ${req.ip}`);
    next();
}

export default logger;