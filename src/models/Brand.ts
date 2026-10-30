import mongoose, { Schema, Model } from "mongoose";

export interface IBrand {
  name: string;
  logo: string;
  website?: string;
  category?: string;
  order: number;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const BrandSchema = new Schema<IBrand>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    logo: {
      type: String,
      required: true,
    },

    website: {
      type: String,
      default: "",
    },

    category: {
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

const Brand: Model<IBrand> =
  mongoose.models.Brand ||
  mongoose.model<IBrand>("Brand", BrandSchema);

export default Brand;