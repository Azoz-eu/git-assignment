import express from 'express';
import { config } from './config/env.js';
import { connectDB } from './db/mongoose.js';
import itemRoutes from './routes/item.routes.js';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: config.env });
});

app.use('/api/items', itemRoutes);

await connectDB();

app.listen(config.port, () => {
  console.log(`Server running in ${config.env} mode on port ${config.port}`);
});
