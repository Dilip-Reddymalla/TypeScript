import Url from "../models/Url.model.js";

interface CreateUrlData {
    originalUrl: string;
    shortCode: string;
    expiresAt: Date | null;
    tier: 'free' | 'premium';
}

export const createUrl = async (data: CreateUrlData)=>{
    return await Url.create(data);
}

export const findUrlByShortCode = async (shortCode: string)=>{
    return await Url.findOne({ shortCode });
}

export const findUrlByOriginalUrl = async (originalUrl: string)=>{
    return await Url.findOne({ originalUrl });
}

export const incrementUrlClicksCount = async (shortCode: string)=>{
    return await Url.findOneAndUpdate(
        {shortCode},
        { $inc: {clicks:1}},
        {new: true}
    )
};

export const deleteUelByShortCode = async (shortCode: string)=>{
    return await Url.findOneAndDelete({shortCode});
}
