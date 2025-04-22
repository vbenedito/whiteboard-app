import { Request, Response } from 'express';
import { askWithVision } from '../../services/ai/ai.service';

export async function askAI(req: Request, res: Response): Promise<void> {
  try {
    const { message, challengeName } = req.body;
    const imageBuffer = req.file?.buffer;

    if (!message && !imageBuffer) {
      res.status(400).json({ error: 'Mensagem ou imagem é obrigatória' });
    }

    const result = await askWithVision({
      message,
      challengeName,
      imageBuffer,
    });
    res.json({ data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao processar a pergunta' });
  }
}
