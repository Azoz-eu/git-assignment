import mongoose from 'mongoose';
import { config } from '../config/env.js';

export async function connectDB() {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB connected [${config.env}]: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDB connection error [${config.env}]:`, error.message);
    process.exit(1);
  }
}
