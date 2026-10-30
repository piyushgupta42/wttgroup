import mongoose, { Schema, Document } from "mongoose";

export interface IHomeSection extends Document {
  key: string;
  content: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const HomeSectionSchema = new Schema<IHomeSection>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },

    content: {
      type: Schema.Types.Mixed,
      required: true,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const HomeSection =
  mongoose.models.HomeSection ||
  mongoose.model<IHomeSection>(
    "HomeSection",
    HomeSectionSchema
  );

export default HomeSection;