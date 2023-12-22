import mongoose, { Schema } from "mongoose";

// Check if the model is already registered
const Topic = mongoose.models.Topic || mongoose.model("Topic", new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
));

export default Topic;
