import mongoose from "mongoose";

export const connectToDb = async () => {
  type ConnectionType = {
      isConnected?: boolean;
  };
  const connection: ConnectionType = {};

  try {
      if (connection.isConnected) return;

      const dbUri = process.env.MONGODB_URI;
      if (!dbUri) {
        throw new Error("Database connection URI is undefined");
      }

      const db = await mongoose.connect(dbUri);
      connection.isConnected = db.connections[0].readyState === 1;
  } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Cannot connect to DataBase');
  }
};
    