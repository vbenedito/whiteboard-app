import { Router } from 'express';
import { askAI } from '../../controllers/ai/ai.controller';
import { upload } from '../../shared/middlewares/multer';

export const aiRoutes = Router();

aiRoutes.post('/ask', upload.single('image'), askAI);
