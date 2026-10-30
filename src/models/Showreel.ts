import mongoose, { Schema, Model } from "mongoose";

export interface ShowreelDocument
  extends mongoose.Document {
  title: string;
  subtitle?: string;
  videoUrl: string;
  thumbnail?: string;
  duration?: string;
  order: number;
  isActive: boolean;
}

const ShowreelSchema = new Schema<ShowreelDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    videoUrl: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Showreel: Model<ShowreelDocument> =
  mongoose.models.Showreel ||
  mongoose.model<ShowreelDocument>(
    "Showreel",
    ShowreelSchema
  );

export default Showreel;