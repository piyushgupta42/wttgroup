export interface HomeSection {
    id: string;
    number: string;
    title: string;
    description: string;
    href: string;
    type: "single" | "collection";
    status: "published" | "draft";
  }
  
  export const homeSections: HomeSection[] = [
    {
      id: "hero",
      number: "01",
      title: "Hero",
      description: "Manage homepage hero content, headline, CTA and showreel.",
      href: "/admin/home/hero",
      type: "single",
      status: "published",
    },
    {
      id: "what-we-do",
      number: "02",
      title: "What We Do",
      description: "Manage services and capabilities displayed on the homepage.",
      href: "/admin/home/what-we-do",
      type: "collection",
      status: "published",
    },
    {
      id: "why-wtt",
      number: "03",
      title: "Why WTT",
      description: "Manage the Why WTT content and key highlights.",
      href: "/admin/home/why-wtt",
      type: "single",
      status: "published",
    },
    {
      id: "brands",
      number: "04",
      title: "Brands",
      description: "Manage homepage client and brand logos.",
      href: "/admin/home/brands",
      type: "collection",
      status: "published",
    },
    {
      id: "recognitions",
      number: "05",
      title: "Recognitions",
      description: "Manage awards, recognitions and achievements.",
      href: "/admin/home/recognitions",
      type: "collection",
      status: "published",
    },
    {
      id: "leaders",
      number: "06",
      title: "Leaders",
      description: "Manage leadership profiles shown on the homepage.",
      href: "/admin/home/leaders",
      type: "collection",
      status: "published",
    },
    {
      id: "team",
      number: "07",
      title: "Team",
      description: "Manage WTT team members and categories.",
      href: "/admin/home/team",
      type: "collection",
      status: "published",
    },
    {
      id: "showreel",
      number: "08",
      title: "Showreel",
      description: "Manage homepage showreel and video content.",
      href: "/admin/home/showreel",
      type: "collection",
      status: "published",
    },
    {
      id: "contact",
      number: "09",
      title: "Contact CTA",
      description: "Manage homepage contact call-to-action.",
      href: "/admin/home/contact",
      type: "single",
      status: "published",
    },
  ];