export const portfolioData = {
  profile: {
    name: "Meeram Waseem",
    role: "Frontend Developer",
    subtitle: "A Developer who",
    boldPhrase: "judges a website by its code...",
    subtext: "Because if the delivery isn't flawless, what else can impress?",
    typingRoles: ["Frontend Developer.", "React Enthusiast.", "UI/UX Explorer."],
    internshipInfo: "AI Engineer Intern at Sharkstack",
    about: "A frontend developer who values clean design, neat code architecture, and high performance. Having completed a six-month internship at Sharkstack, I am ready to design and implement premium interactive user experiences that connect user needs with beautiful code.",
    contactLead: "I'm currently looking to join a cross-functional team that values improving people's lives through accessible websites. Or have a project in mind? Let's connect.",
    email: "meeram2757@gmail.com", // Based on design's pattern and user input
    socials: {
      github: "https://github.com/meeramwaseem",
      linkedin: "https://linkedin.com/in/meeram-waseem-0763b5392",
      instagram: "https://instagram.com/meeramwaseem"
    }
  },
  experience: [
    {
      id: 1,
      title: "Frontend Intern",
      company: "Sharkstack",
      duration: "6 Months",
      description: "Acquired hands-on experience building layouts from Figma mockups, collaborating in a team of developers, and deploying reusable React components.",
      iconType: "internship"
    },
    {
      id: 2,
      title: "React Web Developer",
      company: "Freelance Projects",
      duration: "Ongoing",
      description: "Built responsive, interactive store portals and client applications with React, Tailwind CSS, and Netlify hosting workflows.",
      iconType: "code"
    },
    {
      id: 3,
      title: "UI Designer & Dev",
      company: "Lab Space",
      duration: "Ongoing",
      description: "Designed responsive layouts, cosmic travel portals, and dynamic dashboards centered on micro-animations and micro-interactions.",
      iconType: "design"
    },
    {
      id: 4,
      title: "Creative Coding",
      company: "Open Source",
      duration: "Continuous",
      description: "Maintained personal repositories, debugged layout issues across devices, and automated clean workflows for static website deployments.",
      iconType: "bulb"
    }
  ],
  // skills: [
  //   { name: "React", icon: "react", x: 0, y: -90 },
  //   { name: "Tailwind CSS", icon: "tailwind", x: 50, y: -70 },
  //   { name: "JavaScript", icon: "js", x: 80, y: -25 },
  //   { name: "Figma", icon: "figma", x: 80, y: 30 },
  //   { name: "Node.js", icon: "node", x: 50, y: 80 },
  //   { name: "Redux", icon: "redux", x: -50, y: 80 },
  //   { name: "CSS3", icon: "css", x: -80, y: 30 },
  //   { name: "Next.js", icon: "next", x: -80, y: -25 },
  //   { name: "Git/GitHub", icon: "git", x: -50, y: -70 }
  // ],
  skills: [
  { name: "React", icon: "react", x: 1, y: -140 },
  { name: "Tailwind CSS", icon: "tailwind", x: 90, y: -110 },
  { name: "JavaScript", icon: "js", x: 150, y: -40 },
  { name: "Figma", icon: "figma", x: 150, y: 60 },
  { name: "Node.js", icon: "node", x: 90, y: 140 },
  { name: "Redux", icon: "redux", x: -90, y: 140 },
  { name: "CSS3", icon: "css", x: -150, y: 60 },
  { name: "Next.js", icon: "next", x: -150, y: -40 },
  { name: "Git/GitHub", icon: "git", x: -90, y: -110 }
],
  projects: [
    {
      id: 1,
      title: "The Comfy Store",
      featured: true,
      description: "A premium, fully responsive e-commerce application. Features include interactive product lists, smooth category sorting, complete cart management with reactive states, and responsive checkout-ready UI elements.",
      tech: ["React", "Tailwind CSS", "Vite", "Redux"],
      netlifyUrl: "https://thecomfystores.netlify.app/",
      githubUrl: "https://github.com/meeramwaseem/comfy-store"
    },
    {
      id: 2,
      title: "Weather Dashboard App",
      featured: true,
      description: "A live, reactive weather forecasting dashboard that requests current metrics and multi-day forecasts based on geolocation, styled with gradient sky indicators and animations.",
      tech: ["React", "Tailwind CSS", "API Integration", "Vite"],
      netlifyUrl: "https://api-weather-apps.netlify.app/",
      githubUrl: "https://github.com/meeramwaseem/weather-app"
    },
    {
      id: 3,
      title: "Florida Recipes Portal",
      featured: false,
      description: "A content-driven recipe showcase displaying customizable food lists, categories, responsive detail dialogs, search queries, and beautiful image representations.",
      tech: ["React", "Tailwind CSS", "Vite"],
      netlifyUrl: "https://recipesbyflorida.netlify.app/",
      githubUrl: "https://github.com/meeramwaseem/recipes-app"
    },
    {
      id: 4,
      title: "Let's Travel Space",
      featured: false,
      description: "A cosmic, design-forward landing application built to showcase smooth multi-tab transitions, sleek animations, and immersive space graphics.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      netlifyUrl: "https://letstravelspace.netlify.app/",
      githubUrl: "https://github.com/meeramwaseem/space-travel"
    }
  ]
};
