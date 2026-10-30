import mongoose, {
    Document,
    Model,
    Schema,
  } from "mongoose";
  
  export interface IClientDocument
    extends Document {
    name: string;
    logo: string;
    website?: string;
    category?: string;
    isFeatured: boolean;
    isActive: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  const ClientSchema =
    new Schema<IClientDocument>(
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
  
        isFeatured: {
          type: Boolean,
          default: true,
        },
  
        isActive: {
          type: Boolean,
          default: true,
        },
  
        order: {
          type: Number,
          default: 0,
        },
      },
      {
        timestamps: true,
      }
    );
  
  const Client: Model<IClientDocument> =
    mongoose.models.Client ||
    mongoose.model<IClientDocument>(
      "Client",
      ClientSchema
    );
  
  export default Client;