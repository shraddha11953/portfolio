const projects = [
  {
    id: 1,
    title: "Farmers Assistant App",
    category: "Smart Agriculture Platform",
    github: "https://github.com/shraddha11953/Frmers_Assitant_web_app",
    demo: "#",

    images: [
      "/projects/farmers/1.jpg",
      "/projects/farmers/2.jpg",
      "/projects/farmers/3.jpg",
      "/projects/farmers/4.jpg",
      "/projects/farmers/5.jpg",
    ],

    description:
      "A Django-based smart agriculture platform that empowers farmers with crop recommendations, AI-based disease detection, weather forecasting, market price updates, and an online marketplace connecting farmers directly with buyers.",

    tech: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "SQLite",
      "OpenWeather API",
      "TensorFlow",
      "GitHub",
    ],

    features: [
      "Real-time Weather Forecasting",
      "Crop Recommendation System",
      "AI Crop Disease Detection",
      "Market Price Updates",
      "Farmer & Buyer Marketplace",
      "User Authentication",
      "Order & Contact Requests",
      "Farming Tips & News Feed",
    ],
  },

  {
    id: 2,
    title: "SkillSwap",
    category: "Time-Based Skill Exchange Platform",
    github: "https://github.com/shraddha11953/SkillSwap",
    demo: "#",

    images: [
      "/projects/skillswap/1.png",
      "/projects/skillswap/2.png",
      "/projects/skillswap/3.png",
      "/projects/skillswap/4.png",
      "/projects/skillswap/5.png",
      "/projects/skillswap/6.png",
      "/projects/skillswap/7.png",
      "/projects/skillswap/8.png",
    ],

    description:
      "SkillSwap is a Django web application where users exchange skills using time credits. Users can register, showcase skills, send exchange requests, chat in real time, and schedule learning sessions.",

    tech: [
      "Python",
      "Django",
      "Django Channels",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "WebSocket",
      "GitHub",
    ],

    features: [
      "User Registration & Authentication",
      "Skill Marketplace",
      "Exchange Requests",
      "Real-Time Chat",
      "Calendar Scheduling",
      "Dashboard",
      "Ratings & Skill History",
    ],
  },

  {
    id: 3,
    title: "Disaster Relief System",
    category: "Disaster Management Portal",
    github: "https://github.com/shraddha11953/Disaster_Relief_system",
    demo: "#",

    images: [
      "/projects/disaster/1.png",
      "/projects/disaster/2.png",
      "/projects/disaster/3.png",
      "/projects/disaster/4.png",
      "/projects/disaster/5.png",
      "/projects/disaster/6.png",
      "/projects/disaster/7.png",
    ],

    description:
      "A full-stack Disaster Management Portal built using Django REST Framework and React. It helps citizens report disasters, request rescue, and enables volunteers and authorities to coordinate relief operations.",

    tech: [
      "React",
      "Vite",
      "Django",
      "REST API",
      "SQLite",
      "Tailwind CSS",
      "Axios",
      "GitHub",
    ],

    features: [
      "Secure User Authentication",
      "Disaster Reporting",
      "Help & Rescue Requests",
      "User Dashboard",
      "Volunteer Coordination",
      "Admin Management",
      "Responsive Interface",
    ],
  },

  {
    id: 4,
    title: "Swarajya",
    category: "Social Justice Platform",
    github: "https://github.com/shraddha11953/Swarajya",
    demo: "#",

    images: [
      "/projects/swarajya/1.png",
      "/projects/swarajya/2.png",
      "/projects/swarajya/3.png",
      "/projects/swarajya/4.png",
      "/projects/swarajya/5.png",
    ],

    description:
      "Swarajya is a Django-based social impact platform that enables citizens to report corruption, harassment, and social issues securely while connecting donors and volunteers with people in need.",

    tech: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
      "GitHub",
    ],

    features: [
      "Corruption Reporting",
      "Harassment Reporting",
      "Helping Hand Module",
      "Victim Complaint Tracking",
      "Secure Admin Dashboard",
      "Donation & Support System",
      "Freedom Forum (Upcoming)",
    ],
  },
];

export default projects;