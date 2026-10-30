import mongoose, {
    Document,
    Model,
    Schema,
  } from "mongoose";
  
  export interface IAwardDocument
    extends Document {
    title: string;
    organization?: string;
    category?: string;
    year: number;
    description?: string;
    image?: string;
    link?: string;
    isFeatured: boolean;
    isActive: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  const AwardSchema =
    new Schema<IAwardDocument>(
      {
        title: {
          type: String,
          required: true,
          trim: true,
        },
  
        organization: {
          type: String,
          default: "",
          trim: true,
        },
  
        category: {
          type: String,
          default: "",
          trim: true,
        },
  
        year: {
          type: Number,
          required: true,
        },
  
        description: {
          type: String,
          default: "",
        },
  
        image: {
          type: String,
          default: "",
        },
  
        link: {
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
  
  const Award: Model<IAwardDocument> =
    mongoose.models.Award ||
    mongoose.model<IAwardDocument>(
      "Award",
      AwardSchema
    );
  
  export default Award;