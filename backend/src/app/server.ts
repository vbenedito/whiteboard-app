import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes.aiRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log('🚀 Server is running on http://localhost:3333');
});
