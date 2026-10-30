export interface Award {
    id: string;
    year: string;
    award: string;
    category: string;
    metal: "GOLD" | "SILVER" | "BRONZE";
    campaign: string;
    brand: string;
    image: string;
    description: string;
  }
  
  export const awards: Award[] = [
    {
      id: "01",
      year: "2025",
      award: "e4m Maverick Awards",
      category: "Best Product Launch — Offline",
      metal: "GOLD",
      campaign: "Cook Like a Pro",
      brand: "Milton ProCook",
      image: "/images/awards/award-01.png",
      description:
        "A high-impact product communication campaign designed to turn everyday cooking into a memorable brand experience.",
    },
  
    {
      id: "02",
      year: "2025",
      award: "e4m Maverick Awards",
      category: "Best Marketing Campaign — Hospitality",
      metal: "GOLD",
      campaign: "Taste The Epic",
      brand: "KFC",
      image: "/images/awards/award-02.png",
      description:
        "A bold campaign created to bring the KFC experience into the physical world through memorable outdoor communication.",
    },
  
    {
      id: "03",
      year: "2025",
      award: "e4m Maverick Awards",
      category: "Best Marketing Campaign — Consumer Durable",
      metal: "GOLD",
      campaign: "One Touch Casserole",
      brand: "Milton",
      image: "/images/awards/award-03.png",
      description:
        "A consumer-focused campaign that transformed a simple product proposition into distinctive brand communication.",
    },
  
    {
      id: "04",
      year: "2025",
      award: "e4m Maverick Awards",
      category: "Best DOOH / OOH Campaign",
      metal: "GOLD",
      campaign: "Cook Like a Pro",
      brand: "Milton ProCook",
      image: "/images/awards/award-04.png",
      description:
        "A campaign using outdoor media to create visibility, memorability and a stronger connection between product and audience.",
    },
  
    {
      id: "05",
      year: "2024",
      award: "e4m Maverick Awards",
      category: "Best DOOH / OOH Campaign",
      metal: "GOLD",
      campaign: "The Weather I Long For",
      brand: "Nescafé",
      image: "/images/awards/award-05.png",
      description:
        "An experiential outdoor campaign built around weather, coffee and a highly contextual consumer experience.",
    },
  
    {
      id: "06",
      year: "2024",
      award: "OOH Awards",
      category: "Best Targeted OOH Campaign",
      metal: "GOLD",
      campaign: "My Colour My Choice",
      brand: "Milton",
      image: "/images/awards/award-06.png",
      description:
        "A targeted outdoor campaign that combined product relevance with creative outdoor execution.",
    },
  
    {
      id: "07",
      year: "2025",
      award: "Foxglove Awards",
      category: "Most Innovative Use of OOH",
      metal: "GOLD",
      campaign: "Pahado Wali Maggi aur Baarish Wali Maggi",
      brand: "Maggi",
      image: "/images/awards/award-07.png",
      description:
        "An outdoor campaign that used context and location to make the Maggi proposition more culturally relevant.",
    },
  
    {
      id: "08",
      year: "2024",
      award: "OOH Awards",
      category: "Best Integration / Creative OOH",
      metal: "GOLD",
      campaign: "KitKat — Have a Rich Delicious Break",
      brand: "KitKat",
      image: "/images/awards/award-08.png",
      description:
        "A visually distinctive outdoor execution created around the iconic KitKat break proposition.",
    },
  ];