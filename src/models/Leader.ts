import mongoose, { Schema, Model } from "mongoose";

export interface ILeader {
  name: string;
  designation: string;
  image: string;
  shortBio?: string;
  linkedin?: string;
  order: number;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const LeaderSchema = new Schema<ILeader>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    shortBio: {
      type: String,
      default: "",
    },

    linkedin: {
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

const Leader: Model<ILeader> =
  mongoose.models.Leader ||
  mongoose.model<ILeader>("Leader", LeaderSchema);

export default Leader;