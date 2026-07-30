import { Router } from 'express';
import { shortenUrl, shortenUrlWithCode } from "../controllers/url.controller.js"

const router = Router();

router.post('/shorten',shortenUrl);
router.post('/shorten/:shortCode',shortenUrlWithCode);

export default router;