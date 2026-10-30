export interface Client {
    id: string;
    name: string;
    category: string;
    logo: string;
    description: string;
    featured?: boolean;
  }
  
  export const clientCategories = [
    "ALL",
    "FMCG",
    "AUTOMOTIVE",
    "TECHNOLOGY",
    "REAL ESTATE",
    "FINANCE",
    "RETAIL",
    "LIFESTYLE",
    "MEDIA",
  ];
  
  export const clients: Client[] = [
    {
      id: "01",
      name: "BIBA",
      category: "FMCG",
      logo: "/images/clients/client-01.png",
      description:
        "Building memorable consumer experiences through powerful communication.",
      featured: true,
    },
    {
      id: "02",
      name: "Nestle",
      category: "Cadbury",
      logo: "/images/clients/client-02.png",
      description:
        "Creating campaigns that put mobility brands in motion.",
      featured: true,
    },
    {
      id: "03",
      name: "PNB ",
      category: "Banking & Finance",
      logo: "/images/clients/client-03.png",
      description:
        "Turning technology stories into communication people remember.",
      featured: true,
    },
    {
      id: "04",
      name: "Star Health Insurance",
      category: "Insurance",
      logo: "/images/clients/client-04.png",
      description:
        "Making places, spaces and developments impossible to ignore.",
    },
    {
      id: "05",
      name: "TCS Technology",
      category: "IT & SOFTWARE",
      logo: "/images/clients/client-05.png",
      description:
        "Building trust through strategic brand communication.",
      featured: true,
    },
    {
      id: "06",
      name: "Techno Mobile",
      category: "RETAIL",
      logo: "/images/clients/client-06.png",
      description:
        "Connecting retail brands with audiences across India.",
    },
    {
      id: "07",
      name: "Uncle D",
      category: "Delivery & Logistics",
      logo: "/images/clients/client-07.png",
      description:
        "Creating culture-led campaigns that become part of everyday life.",
    },
    {
      id: "08",
      name: "Honda",
      category: "AUTOMOTIVE",
      logo: "/images/clients/client-08.png",
      description:
        "Helping media brands turn attention into lasting relevance.",
    },
    {
      id: "09",
      name: "Unacademy",
      category: "EDUCATION",
      logo: "/images/clients/client-09.png",
      description:
        "Strategic storytelling for brands competing for everyday attention.",
    },
    {
      id: "10",
      name: "CP Plus",
      category: "TECHNOLOGY",
      logo: "/images/clients/client-10.png",
      description:
        "Technology, creativity and communication working together.",
    },
    {
      id: "11",
      name: "StarBucks",
      category: "FMCG",
      logo: "/images/clients/client-11.png",
      description:
        "Creating visibility for brands built to move.",
    },
    {
      id: "12",
      name: "KFC",
      category: "FMCG",
      logo: "/images/clients/client-12.png",
      description:
        "Turning destinations into distinctive brand experiences.",
    },
  ];