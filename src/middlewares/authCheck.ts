import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import RequestAuth from '../types/authCheck';

const authCheck=(req : RequestAuth,res : Response, next : NextFunction)=>{
    try {
        const secret: string = process.env.JWT_SECRET_KEY || "";

        const token = req.header('authorization')?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                status: 401,
                success: false,
                message: "Unauthorized: No token provided"
            });
        }
        const decoded = jwt.verify(token ?? '', secret);
         // Store the decoded token
        req.id = typeof decoded === 'object' && 'id' in decoded ? decoded.id : undefined;

        next()
    } catch (error : any) {
        return res.status(500).json({
            status: 500,
            success : false,
            message : error.message
        })
    }
}

export default authCheck;