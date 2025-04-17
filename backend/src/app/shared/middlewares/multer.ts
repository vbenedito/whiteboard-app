import multer from 'multer';
import path from 'path';

export const upload = multer({
  storage: multer.memoryStorage(), // para manter a imagem em memória
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
      return cb(new Error('Apenas imagens são permitidas'));
    }
    cb(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
