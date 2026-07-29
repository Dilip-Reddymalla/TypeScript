import type {Request, Response} from 'express';
import * as urlServices from '../services/url.service.js'

export const shortenUrl = async (req:Request, res:Response)=>{
    try{
        const {originalUrl} = req.body;
        if(!originalUrl){
            res.status(400).json({
                success: false,
                meassage: "The Original url is missing",
            });
            return;
        }
        const url = await urlServices.createShortCode(originalUrl);

        res.status(200).json({
            success: true,
            data: url,
        });
    }catch(e){
        res.status(500).json({
            success:false,
            meassage:"Internal Server error",
        });
    }
}

