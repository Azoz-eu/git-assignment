import { config } from './config/env.js';
import { connectDB } from './db/mongoose.js';

await connectDB();
console.log(`Server running in ${config.env} mode on port ${config.port}`);
