import mongoose, { Schema, Model } from "mongoose";

export interface IRecognition {
  title: string;
  organization: string;
  year: string;
  image: string;
  description?: string;
  order: number;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const RecognitionSchema = new Schema<IRecognition>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    organization: {
      type: String,
      default: "",
    },

    year: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      default: 0,
    },

    enabled: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Recognition: Model<IRecognition> =
  mongoose.models.Recognition ||
  mongoose.model<IRecognition>(
    "Recognition",
    RecognitionSchema
  );

export default Recognition;