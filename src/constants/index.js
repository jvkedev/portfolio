import {
  stocklock,
  vyomme,
  lifecare,
  portfolio3d,
  vsit,
  jagatmitra,
  code,
  concepts,
  designs,
  ideas,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const achievements = [
  {
    title: ["Web Developer Intern"],
    company_name: "Jagatmitra Foundation",
    icon: jagatmitra,
    iconBg: "#ffffff",
    date: "Feb 2026 – Jul 2026",
    points: [
      "Delhi, India (5 Months)",
      "Contributed to full-stack web applications using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
      "Developed responsive interfaces and integrated them with backend REST APIs.",
      "Worked with backend services and databases to implement core application functionality and authentication.",
      "Contributed to key web projects, including an E-commerce Platform and She-Ride.",
    ],
    certificate: null,
  },
  {
    title: ["Full Stack Developer Certification"],
    company_name: "VSIT Computer Education",
    icon: vsit,
    iconBg: "#ffffff",
    date: "Aug 2024 – Apr 2025",
    points: [
      "Grade: A | ISO 9001:2015 Certified Institute",
      "Course: Full Stack Dev. (13 August 2024 – 29 April 2025) | Issue Date: 16 July 2025",
      "Completed Full Stack Development training covering frontend and backend technologies, including React.js, Node.js, Express, MongoDB, MySQL, Postman, Git, and GitHub.",
      "Technology Areas: HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express, MySQL, MongoDB, Postman, Git, GitHub.",
    ],
    certificate: "/assets/vsit-certificate.jpg",
  },
];

const projects = [
  {
    name: "LifeCare Polyclinic",
    description:
      "A full-stack website built for LifeCare Polyclinic, focused on presenting the clinic's services and information through a clean and responsive web experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "violet-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "ruby-text-gradient",
      },
    ],
    image: lifecare,
    images: [lifecare],
    source_code_link: null,
    live_demo_link: "https://lifecarepolyclinic.com",
    features: [
      "Developed and deployed a responsive healthcare website for LifeCare Polyclinic using the MERN stack.",
      "Built a clean, user-friendly interface presenting clinic services, doctor profiles, facilities, and healthcare information.",
      "Developed backend APIs using Node.js and Express.js for managing clinic services and integrating frontend functionality.",
      "Integrated MongoDB for structured data storage, persistent doctor profiles, and service directories.",
      "Engineered appointment inquiry workflows with server-side validation for reliable patient booking.",
    ],
  },
  {
    name: "Vyomme Divine Essentials",
    description:
      "A full-stack e-commerce web platform developed for puja essentials, featuring dynamic product catalogs, persistent cart workflows, role-based authentication, and structured REST APIs for order and inventory management.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "violet-text-gradient",
      },
      {
        name: "REST APIs",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "ruby-text-gradient",
      },
    ],
    image: vyomme,
    images: [vyomme],
    source_code_link: null,
    live_demo_link: "http://chairmallaretreat.com/",
    features: [
      "Engineered a full-stack e-commerce platform with dynamic product catalog, category filters, and price search.",
      "Implemented secure user authentication and role-based access control separating customer and administrative operations.",
      "Built core e-commerce workflows including persistent shopping cart, checkout, and order status handling.",
      "Designed and integrated RESTful APIs using Express.js with MongoDB and Mongoose for efficient data management.",
      "Created an administrative dashboard for real-time inventory and catalog tracking.",
    ],
  },
  {
    name: "StockLock API",
    isFeatured: true,
    category: "Core Backend Project",
    description:
      "A backend-focused REST API built with TypeScript, Express.js, and PostgreSQL, designed with secure authentication, structured error handling, validation, and a maintainable backend architecture.",
    tags: [
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "violet-text-gradient",
      },
      {
        name: "REST API",
        color: "orange-text-gradient",
      },
      {
        name: "JWT",
        color: "ruby-text-gradient",
      },
      {
        name: "Zod",
        color: "gold-text-gradient",
      },
      {
        name: "Pino",
        color: "green-text-gradient",
      },
    ],
    image: stocklock,
    images: [stocklock],
    source_code_link: "https://github.com/jvkedev/stocklock",
    live_demo_link: "https://stocklock-olive.vercel.app/",
    features: [
      "Engineered atomic inventory deduction with PostgreSQL row-level locks to eliminate race conditions during concurrent checkouts.",
      "Hardened authentication pipeline featuring Argon2 password hashing and JWT access/refresh token rotation stored in secure HTTP-only cookies.",
      "Enforced Role-Based Access Control (RBAC) across protected API endpoints with custom authentication and authorization middleware.",
      "Implemented runtime request schema validation across incoming API payloads utilizing Zod.",
      "Structured high-performance JSON logging with Pino, request correlation IDs, and centralized error handling middleware.",
      "Architected clean separation of concerns using controllers, services, repositories, and raw SQL queries for optimal database performance.",
    ],
  },
  {
    name: "3D Portfolio",
    description:
      "An interactive 3D developer portfolio designed to showcase my projects, skills, and development journey through an immersive web experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "orange-text-gradient",
      },
      {
        name: "React Three Fiber",
        color: "pink-text-gradient",
      },
      {
        name: "Spline",
        color: "violet-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "ruby-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
    ],
    image: portfolio3d,
    images: [portfolio3d],
    source_code_link: null,
    live_demo_link: "https://www.jvke.in/",
    features: [
      "Interactive 3D workspace model rendered with Three.js and React Three Fiber with custom lighting and orbit controls.",
      "Embedded interactive 3D mechanical keyboard scene created with Spline runtime and responsive canvas scaling.",
      "Physics-based elastic cursor and smooth spring-based scroll entrance animations using Framer Motion.",
      "Modular project showcase architecture with deep-dive modal views and keyboard navigation shortcuts.",
      "Fully responsive layout designed for desktop, tablet, and mobile with tailored typography and modern dark aesthetic.",
    ],
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, words };
