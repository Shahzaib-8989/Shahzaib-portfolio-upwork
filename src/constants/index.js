import {
  backend,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Products Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer (Team Lead)",
    company_name: "Confidential",
    icon: web,
    iconBg: "#383E56",
    date: "Sep 2025 - Present",
    points: [
      "Lead MERN development across multiple projects, delivering scalable and high-quality solutions.",
      "Engineered an AI-driven tax strategy engine that pulls real-time client data via HubSpot API, generating automated savings suggestions and financial forecasts.",
      "Collaborate directly with clients to gather requirements, provide technical guidance, and ensure satisfaction.",
      "Implemented a RAG (Retrieval-Augmented Generation) based knowledge base to provide precise, context-aware project documentation and internal support.",
      "Architected a YouTube Management module utilizing YouTube Data API and AI analysis to provide automated video optimization suggestions, increasing potential channel reach.",
      "Built interactive tools for tax optimization on QA TAX platform, allowing users to input financial details and receive AI-generated strategies with real-time savings forecasts (up to 30% estimated tax reduction).",
      "Drive architecture decisions, code reviews, and best practices across frontend and backend.",
      "Mentor junior developers and interns, supporting team growth and performance."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Obenan",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Sep 2025",
    points: [
      "Led the frontend team, providing technical guidance and code reviews.",
      "Collaborated directly with the Amsterdam team to deliver aligned, cross-regional solutions.",
      "Implemented modern frameworks to enhance performance and user experience.",
      "Trained and mentored interns to support their growth and integration.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Purelogics",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2022 - July 2024",
    points: [
      "Meeting with the development team to discuss user interface ideas and applications.",
      "Developing and implementing responsive user interface components using MERN Stack concepts.",
      "Develop blockchain marketplace using MERN workflows. Integration of payment wallets MetaMask, Trust, Anchor).",
      "Experienced with AWS modules and Third-party API integrations.",
    ],
  },
  {
    title: "Web Developer & IT Support",
    company_name: "Chiltan Pure",
    icon: web,
    iconBg: "#E6DEDD",
    date: "May 2021 - Apr 2022",
    points: [
      "Developed an Inventory Management System using React JS with real-time stock updates and intuitive UI/UX design.",
      "Oversaw social media accounts including content scheduling, performance tracking, and customer engagement.",
      "Integrated REST APIs for seamless data exchange between frontend and backend systems.",
    ],
  },
  {
    title: "Software & Stack Developer",
    company_name: "Skills Institute of Training",
    icon: backend,
    iconBg: "#383E56",
    date: "Dec 2020 - May 2021",
    points: [
      "Analysis and design of databases and user interfaces.",
      "Managed backend support for database systems: Microsoft SQL Server, Mongo DB, and MySQL.",
      "Highly adaptable in quickly changing technical environments with very strong organizational and analytical skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shahzaib proved me wrong.",
    name: "Matthew Yau",
    designation: "CEO & Founder",
    company: "RethinkerLab",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shahzaib does.",
    name: "Emmanuel Neuraz",
    designation: "Finance & Business Partner",
    company: "Lumaya SA",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Shahzaib optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shaun Eck",
    designation: "Chief Advisory Officer",
    company: "Quantus Group",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "QA TAX",
    description:
      "AI-driven tax strategy platform featuring interactive tax optimization tools that generate real-time savings forecasts (up to 30% tax reduction). Includes a gamified course system with AI-powered content parsing, increasing course completion by 45% and reducing manual data entry by 70%. Integrated Sonnet AI chatbot for real-time guidance, reducing support requests by 35%.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: "/qa-tax.png",
    source_code_link: "https://dev.qompound.com",
  },
  {
    name: "Obenan - Marketing Tool",
    description:
      "Reach the business revenue potential with Obenan Intelligence. A comprehensive marketing tool designed to optimize business growth.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: "/obenan.png",
    source_code_link: "https://obenan.ai",
  },
  {
    name: "Obenan - Agent Dashboard",
    description:
      "AI-Powered solutions to automate your online duties, boost your location visibility, and increase your brand's reputation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "hero-ui",
        color: "pink-text-gradient",
      },
    ],
    image: "/obenan-dashboard.png", // Reusing obenan.png as no specific agent dashboard image was found
    source_code_link: "https://agent.obenan.ai/",
  },
  {
    name: "Obenan - OBI Life",
    description:
      "Obilife.ai is a health and wellness platform that analyzes uploaded medical or fitness reports to provide personalized suggestions on diet, exercise, and daily routines.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: "/obiLife.png",
    source_code_link: "https://obilife.ai/",
  },
  {
    name: "ZIMZEE SOCIALMEDIA APP",
    description:
      "Zimzee is your go-to app for seamlessly managing content across various social media platforms. Achieved a 40% increase in daily active users and a 25% improvement in user retention.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: "/Zimzee.png",
    source_code_link: "https://zimzee.com/",
  },
  {
    name: "HELLO CUSTOM APP",
    description:
      "Achieved streamlined order fulfillment for 100 POD products by integrating Stripe Payment System. Features an Admin Dashboard for Users, Orders, Subscription Plans, and Revenue Management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: "/helloCustom.png",
    source_code_link: "https://hellocustom.io/",
  },
  {
    name: "Aura Health",
    description:
      "Emotion-Aware Wellness Platform serving 8M+ users. Led modernization across web and data layers, implementing Emotion AI-driven recommendations and a unified design system. Achieved 40% boost in content relevance and 35% DAU increase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: "/Aura.png",
    source_code_link: "https://aurahealth.io/",
  },
  {
    name: "TryHackMe",
    description:
      "Modernized a Cybersecurity Learning Platform for 6M+ users. Full rewrite with TypeScript/React/Next.js, introducing modular architecture and performance tuning. Scaled platform from 2M to 6M users flawlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: "/TryHackMe.png",
    source_code_link: "https://tryhackme.com/",
  },
  {
    name: "Navero",
    description:
      "Fair, Fast & Smart Hiring Platform. Built Skill Test Library, CV Analysis pipelines, and Anti-Cheating measures. Integrated Stripe billing and RBAC for a streamlined recruitment process.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: "/Navero.png",
    source_code_link: "https://www.navero.me/",
  },
];

export { experiences, projects, services, technologies, testimonials };
