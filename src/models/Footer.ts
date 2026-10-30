import mongoose, { Schema, Model } from "mongoose";

const FooterSocialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
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
    _id: false,
  }
);

const FooterLinkSchema = new Schema(
  {
    label: String,
    href: String,
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
    _id: false,
  }
);

export interface FooterDocument
  extends mongoose.Document {
  logo: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  copyrightText: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
    isActive: boolean;
    order: number;
  }[];
  quickLinks: {
    label: string;
    href: string;
    isActive: boolean;
    order: number;
  }[];
  legalLinks: {
    label: string;
    href: string;
    isActive: boolean;
    order: number;
  }[];
  isActive: boolean;
}

const FooterSchema = new Schema<FooterDocument>(
  {
    logo: {
      type: String,
      required: true,
    },

    tagline: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    copyrightText: {
      type: String,
      default: "",
    },

    socialLinks: {
      type: [FooterSocialSchema],
      default: [],
    },

    quickLinks: {
      type: [FooterLinkSchema],
      default: [],
    },

    legalLinks: {
      type: [FooterLinkSchema],
      default: [],
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

const Footer: Model<FooterDocument> =
  mongoose.models.Footer ||
  mongoose.model<FooterDocument>(
    "Footer",
    FooterSchema
  );

export default Footer;