export type HomeSectionKey =
  | "hero"
  | "what-we-do"
  | "why-wtt"
  | "brands"
  | "recognitions";

export interface HeroSection {
  section: "hero";

  eyebrow: string;

  headline: string;

  accentText: string;

  description: string;

  backgroundImage: string;

  backgroundVideo: string;

  buttonText: string;

  buttonUrl: string;

  scrollText: string;

  isActive: boolean;
}

export interface WhatWeDoSection {
  section: "what-we-do";

  eyebrow: string;

  topLabel: string;

  headlineLine1: string;

  headlineAccent: string;

  headlineLine2: string;

  paragraphs: string[];

  image: string;

  imageEyebrow: string;

  imageTitle: string;

  imageAccent: string;

  bottomText: string;

  buttonText: string;

  isActive: boolean;
}

export interface WhyWttItem {
  id: string;

  number: string;

  title: string;

  description: string;
}

export interface WhyWttSection {
  section: "why-wtt";

  eyebrow: string;

  topLabel: string;

  headlineLine1: string;

  headlineLine2: string;

  paragraphs: string[];

  philosophyItems: WhyWttItem[];

  isActive: boolean;
}

export interface BrandItem {
  id: string;

  name: string;

  category: string;

  logo: string;

  order: number;

  isActive: boolean;
}

export interface BrandsSection {
  section: "brands";

  eyebrow: string;

  topLabel: string;

  headlineLine1: string;

  headlineLine2: string;

  description: string;

  totalLabel: string;

  brands: BrandItem[];

  isActive: boolean;
}

export interface RecognitionItem {
  id: string;

  title: string;

  organization: string;

  description: string;

  image: string;

  year: string;

  order: number;

  isActive: boolean;
}

export interface RecognitionsSection {
  section: "recognitions";

  eyebrow: string;

  headlineLine1: string;

  headlineLine2: string;

  totalLabel: string;

  recognitions: RecognitionItem[];

  isActive: boolean;
}

export type HomeSection =
  | HeroSection
  | WhatWeDoSection
  | WhyWttSection
  | BrandsSection
  | RecognitionsSection;