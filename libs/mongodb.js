import mongoose from 'mongoose';

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to be caught in the calling function
  }
};

export default connectToMongoDb;
