import mongoose, {
    Document,
    Model,
    Schema,
  } from "mongoose";
  
  export interface IHeaderMenuDocument
    extends Document {
    label: string;
    href: string;
    order: number;
    isActive: boolean;
    openInNewTab: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  const HeaderMenuSchema =
    new Schema<IHeaderMenuDocument>(
      {
        label: {
          type: String,
          required: true,
          trim: true,
        },
  
        href: {
          type: String,
          required: true,
          trim: true,
        },
  
        order: {
          type: Number,
          default: 0,
        },
  
        isActive: {
          type: Boolean,
          default: true,
        },
  
        openInNewTab: {
          type: Boolean,
          default: false,
        },
      },
      {
        timestamps: true,
      }
    );
  
  const HeaderMenu: Model<IHeaderMenuDocument> =
    mongoose.models.HeaderMenu ||
    mongoose.model<IHeaderMenuDocument>(
      "HeaderMenu",
      HeaderMenuSchema
    );
  
  export default HeaderMenu;