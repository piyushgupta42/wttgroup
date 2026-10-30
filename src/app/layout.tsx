
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://wttgroup.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Walk The Talk | Out-of-Home Advertising Agency",
    template: "%s | Walk The Talk",
  },

  description:
    "Walk The Talk (WTT Group) is an Out-of-Home advertising agency specializing in media planning, buying, and execution to deliver impactful brand experiences.",

  applicationName: "Walk The Talk",

  keywords: [
    "Walk The Talk",
    "WTT Group",
    "Out-of-Home advertising",
    "OOH advertising agency",
    "Outdoor advertising",
    "Media planning",
    "Media buying",
    "OOH campaign execution",
    "Brand advertising",
    "India advertising agency",
  ],

  authors: [
    {
      name: "Walk The Talk",
      url: siteUrl,
    },
  ],

  creator: "Walk The Talk",
  publisher: "Walk The Talk",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Walk The Talk",
    title: "Walk The Talk | Out-of-Home Advertising Agency",
    description:
      "A method to the madness. Walk The Talk delivers strategic media planning, buying, and execution in the Out-of-Home advertising space.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Walk The Talk — Out-of-Home Advertising Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Walk The Talk | Out-of-Home Advertising Agency",
    description:
      "Strategic media planning, buying, and execution for impactful Out-of-Home advertising campaigns.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "advertising",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#007aff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
