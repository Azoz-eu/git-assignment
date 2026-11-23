import dotenv from 'dotenv';
import path from 'path';

const VALID_ENVS = ['staging', 'preprod', 'prod'];
const currentEnv = process.env.NODE_ENV || 'staging';

if (!VALID_ENVS.includes(currentEnv)) {
  throw new Error(`Invalid NODE_ENV "${currentEnv}". Must be one of: ${VALID_ENVS.join(', ')}`);
}

const envFile = `.env.${currentEnv}`;
const result = dotenv.config({ path: path.resolve(process.cwd(), envFile) });

if (result.error) {
  throw new Error(`Could not load ${envFile}: ${result.error.message}`);
}

export const config = {
  env: currentEnv,
  port: Number(process.env.PORT) || 3000,
  mongoUri: process.env.MONGO_URI,
};
