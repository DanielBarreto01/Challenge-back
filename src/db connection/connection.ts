import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log('Conectado a la base de datos de MongoDB');
  } catch (error) {
    console.error(error);
    throw new Error('Error al conectar con la base de datos');
  }
};

export { connectionDb };
