import { config } from './config/env.js';

console.log(`Environment: ${config.env}`);
console.log(`Port: ${config.port}`);
console.log(`Mongo URI: ${config.mongoUri}`);
