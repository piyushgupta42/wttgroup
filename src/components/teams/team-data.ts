export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  location: string;
  image: string;
  isLeader?: boolean;
  description?: string;
}

export const teamMembers: TeamMember[] = [
  // =========================================================
  // LEADERSHIP — 4
  // =========================================================

  {
    id: "01",
    name: "Leader One",
    role: "Founder & Director",
    department: "LEADERSHIP",
    location: "MUMBAI",
    image: "/images/team/team-01.jpg",
    isLeader: true,
    description:
      "Driving the vision, culture and ambition behind WTT.",
  },

  {
    id: "02",
    name: "Leader Two",
    role: "Managing Director",
    department: "LEADERSHIP",
    location: "MUMBAI",
    image: "/images/team/team-02.jpg",
    isLeader: true,
    description:
      "Building relationships, businesses and ideas that create impact.",
  },

  {
    id: "03",
    name: "Leader Three",
    role: "Creative Director",
    department: "LEADERSHIP",
    location: "MUMBAI",
    image: "/images/team/team-03.jpg",
    isLeader: true,
    description:
      "Turning cultural insight into creative ideas people remember.",
  },

  {
    id: "04",
    name: "Leader Four",
    role: "Business Director",
    department: "LEADERSHIP",
    location: "DELHI",
    image: "/images/team/team-04.jpg",
    isLeader: true,
    description:
      "Connecting ambitious brands with meaningful opportunities.",
  },

  // =========================================================
  // SQUAD — 28
  // =========================================================

  {
    id: "05",
    name: "Team Member 05",
    role: "Associate Creative Director",
    department: "CREATIVE",
    location: "MUMBAI",
    image: "/images/team/team-05.jpg",
  },

  {
    id: "06",
    name: "Team Member 06",
    role: "Art Director",
    department: "CREATIVE",
    location: "MUMBAI",
    image: "/images/team/team-06.jpg",
  },

  {
    id: "07",
    name: "Team Member 07",
    role: "Copywriter",
    department: "CREATIVE",
    location: "MUMBAI",
    image: "/images/team/team-07.jpg",
  },

  {
    id: "08",
    name: "Team Member 08",
    role: "Senior Designer",
    department: "CREATIVE",
    location: "DELHI",
    image: "/images/team/team-08.jpg",
  },

  {
    id: "09",
    name: "Team Member 09",
    role: "Creative Strategist",
    department: "STRATEGY",
    location: "MUMBAI",
    image: "/images/team/team-09.jpg",
  },

  {
    id: "10",
    name: "Team Member 10",
    role: "Strategy Manager",
    department: "STRATEGY",
    location: "DELHI",
    image: "/images/team/team-10.jpg",
  },

  {
    id: "11",
    name: "Team Member 11",
    role: "Brand Strategist",
    department: "STRATEGY",
    location: "BENGALURU",
    image: "/images/team/team-11.jpg",
  },

  {
    id: "12",
    name: "Team Member 12",
    role: "Account Director",
    department: "CLIENT SERVICES",
    location: "MUMBAI",
    image: "/images/team/team-12.jpg",
  },

  {
    id: "13",
    name: "Team Member 13",
    role: "Account Manager",
    department: "CLIENT SERVICES",
    location: "MUMBAI",
    image: "/images/team/team-13.jpg",
  },

  {
    id: "14",
    name: "Team Member 14",
    role: "Account Manager",
    department: "CLIENT SERVICES",
    location: "DELHI",
    image: "/images/team/team-14.jpg",
  },

  {
    id: "15",
    name: "Team Member 15",
    role: "Client Partner",
    department: "CLIENT SERVICES",
    location: "MUMBAI",
    image: "/images/team/team-15.jpg",
  },

  {
    id: "16",
    name: "Team Member 16",
    role: "Digital Lead",
    department: "DIGITAL",
    location: "MUMBAI",
    image: "/images/team/team-16.jpg",
  },

  {
    id: "17",
    name: "Team Member 17",
    role: "Digital Strategist",
    department: "DIGITAL",
    location: "BENGALURU",
    image: "/images/team/team-17.jpg",
  },

  {
    id: "18",
    name: "Team Member 18",
    role: "Social Media Manager",
    department: "DIGITAL",
    location: "MUMBAI",
    image: "/images/team/team-18.jpg",
  },

  {
    id: "19",
    name: "Team Member 19",
    role: "Content Strategist",
    department: "DIGITAL",
    location: "DELHI",
    image: "/images/team/team-19.jpg",
  },

  {
    id: "20",
    name: "Team Member 20",
    role: "Media Planner",
    department: "MEDIA",
    location: "MUMBAI",
    image: "/images/team/team-20.jpg",
  },

  {
    id: "21",
    name: "Team Member 21",
    role: "Media Manager",
    department: "MEDIA",
    location: "MUMBAI",
    image: "/images/team/team-21.jpg",
  },

  {
    id: "22",
    name: "Team Member 22",
    role: "Media Executive",
    department: "MEDIA",
    location: "DELHI",
    image: "/images/team/team-22.jpg",
  },

  {
    id: "23",
    name: "Team Member 23",
    role: "Production Lead",
    department: "PRODUCTION",
    location: "MUMBAI",
    image: "/images/team/team-23.jpg",
  },

  {
    id: "24",
    name: "Team Member 24",
    role: "Production Manager",
    department: "PRODUCTION",
    location: "MUMBAI",
    image: "/images/team/team-24.jpg",
  },

  {
    id: "25",
    name: "Team Member 25",
    role: "Technology Lead",
    department: "TECHNOLOGY",
    location: "BENGALURU",
    image: "/images/team/team-25.jpg",
  },

  {
    id: "26",
    name: "Team Member 26",
    role: "Project Manager",
    department: "OPERATIONS",
    location: "MUMBAI",
    image: "/images/team/team-26.jpg",
  },

  {
    id: "27",
    name: "Team Member 27",
    role: "Business Manager",
    department: "BUSINESS",
    location: "DELHI",
    image: "/images/team/team-27.jpg",
  },

  {
    id: "28",
    name: "Team Member 28",
    role: "Business Manager",
    department: "BUSINESS",
    location: "MUMBAI",
    image: "/images/team/team-28.jpg",
  },

  {
    id: "29",
    name: "Team Member 29",
    role: "HR Manager",
    department: "PEOPLE",
    location: "MUMBAI",
    image: "/images/team/team-29.jpg",
  },

  {
    id: "30",
    name: "Team Member 30",
    role: "Operations Manager",
    department: "OPERATIONS",
    location: "MUMBAI",
    image: "/images/team/team-30.jpg",
  },

  {
    id: "31",
    name: "Team Member 31",
    role: "Senior Executive",
    department: "CLIENT SERVICES",
    location: "MUMBAI",
    image: "/images/team/team-31.jpg",
  },

  {
    id: "32",
    name: "Team Member 32",
    role: "Executive",
    department: "BUSINESS",
    location: "DELHI",
    image: "/images/team/team-32.jpg",
  },
];

export const leaders = teamMembers.filter(
  (member) => member.isLeader
);

export const squad = teamMembers.filter(
  (member) => !member.isLeader
);