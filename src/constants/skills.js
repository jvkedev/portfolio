export const SkillNames = {
  JS: "js",
  TS: "ts",
  HTML: "html",
  CSS: "css",
  REACT: "react",
  NESTJS: "nestjs",
  TANSTACK_QUERY: "tanstackquery",
  TAILWIND: "tailwind",
  NODEJS: "nodejs",
  EXPRESS: "express",
  POSTGRES: "postgres",
  MONGODB: "mongodb",
  GIT: "git",
  GITHUB: "github",
  PRETTIER: "prettier",
  NPM: "npm",
  ZUSTAND: "zustand",
  REST_API: "restapi",
  LINUX: "linux",
  POSTMAN: "postman",
  PINO: "pino",
  ESLINT: "eslint",
  ZOD: "zod",
  VERCEL: "vercel",
};

export const wrapText = (text, maxLineLength = 28) => {
  if (!text) return "";
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (candidate.length > maxLineLength && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines.join("\n");
};

export const SKILLS = {
  js: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Scripting language for interactive web pages.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  ts: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with static typing and better tooling.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  html: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Standard markup language for the web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  css: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Style sheet language for visual presentation.",
    color: "#1572b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  react: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Library for building fast, reusable UI components.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  nestjs: {
    id: 6,
    name: "nestjs",
    label: "NestJS",
    shortDescription: "Node.js framework for scalable server-side apps.",
    color: "#e0234e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  tanstackquery: {
    id: 7,
    name: "tanstackquery",
    label: "TanStack Query",
    shortDescription: "Async state & data fetching for web apps.",
    color: "#ff4154",
    icon: "/assets/skills/tanstack-query.svg",
  },
  tailwind: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS for rapid custom UI.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  nodejs: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Runtime for running JavaScript server-side.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  express: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Minimal Node.js framework for APIs.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  postgres: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Reliable open-source relational database.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  mongodb: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL database using JSON-like documents.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  git: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control system.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  github: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Platform to host and collaborate via Git.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  prettier: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatter for consistent style.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  npm: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for JavaScript projects.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  zustand: {
    id: 17,
    name: "zustand",
    label: "Zustand",
    shortDescription: "Small, fast state management for React.",
    color: "#443e38",
    icon: "/assets/skills/zustand.svg",
  },
  restapi: {
    id: 18,
    name: "restapi",
    label: "REST API",
    shortDescription: "Standard style for CRUD web services.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg",
  },
  linux: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source OS for servers & dev.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  postman: {
    id: 20,
    name: "postman",
    label: "Postman",
    shortDescription: "API platform for testing REST & GraphQL.",
    color: "#ff6c37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  pino: {
    id: 21,
    name: "pino",
    label: "Pino",
    shortDescription: "Fast, low-overhead JSON logger for Node.",
    color: "#68a063",
    icon: "https://raw.githubusercontent.com/pinojs/pino/main/pino-logo-hire.png",
  },
  eslint: {
    id: 22,
    name: "eslint",
    label: "ESLint",
    shortDescription: "Static analysis for clean JS/TS code.",
    color: "#4b32c3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
  },
  zod: {
    id: 23,
    name: "zod",
    label: "Zod",
    shortDescription: "TS-first schema validation library.",
    color: "#3068b7",
    icon: "https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg",
  },
  vercel: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Cloud platform for deploying frontend apps.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

// Aliases for convenient direct lookups and backward compatibility
SKILLS.vue = SKILLS.nestjs;
SKILLS.nextjs = SKILLS.tanstackquery;
SKILLS.tanstack_query = SKILLS.tanstackquery;
SKILLS["tanstack-query"] = SKILLS.tanstackquery;
SKILLS.firebase = SKILLS.zustand;
SKILLS.wordpress = SKILLS.restapi;
SKILLS.rest_api = SKILLS.restapi;
SKILLS["rest-api"] = SKILLS.restapi;
SKILLS.docker = SKILLS.postman;
SKILLS.nginx = SKILLS.pino;
SKILLS.aws = SKILLS.eslint;
SKILLS.vim = SKILLS.zod;
SKILLS.javascript = SKILLS.js;
SKILLS.typescript = SKILLS.ts;
SKILLS.postgresql = SKILLS.postgres;