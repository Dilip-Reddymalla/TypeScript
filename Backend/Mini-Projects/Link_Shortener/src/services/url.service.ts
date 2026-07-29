import * as urlRepository from "../repositories/url.repository.js"
import {generateShortCode} from "../utils/generateShortCode.js"

export const createShortCode = async (originalUrl: string)=>{
    let shortCode:string = generateShortCode();

    while(await urlRepository.findUrlByShortCode(shortCode)){
        shortCode = generateShortCode();
    }

    return urlRepository.createUrl({
        originalUrl,
        shortCode,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        tier: "free",
    });
}
