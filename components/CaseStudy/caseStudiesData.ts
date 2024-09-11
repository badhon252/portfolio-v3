import igit from "Assets/image/git.svg";
import inext from "Assets/image/Nextjs.svg";
import iprisma from "Assets/image/prisma.svg";
import ireact from "Assets/image/react.svg";
import itypescript from "Assets/image/typescript.svg";
// product images
import dashboard from "Assets/projects/dashboard.gif";
import prismaStore from "Assets/projects/prisma-store.gif";
import promptopia from "Assets/projects/promptopia.gif";
// data/caseStudiesData.ts
const caseStudies = [
  {
    slug: "prisma-store",
    title: "Prisma-Store",
    description:
      "Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system.",
    content: "Detailed information about Project A...",
    image: prismaStore,
    tech: [igit, inext, iprisma, ireact, itypescript],
    url: {
      study: "/case-study/prisma-store",
      github: "https://github.com/badhon252/PrismaStore-client",
      live: "https://www.prismastore.tech/",
    },
    serial: "1",
  },
  {
    slug: "promptopia",
    title: "Promptopia",
    description:
      "This is a case study for Promptopia. Post and share creative AI prompt to enhance productivity. search for the existing one or generate one for your work.",
    content:
      "Detailed information about Project, Full stack web application made with Nextjs, Mongodb.",
    image: promptopia,
    tech: [igit, ireact],
    url: {
      study: "/case-study/promptopia",
      github: "https://github.com/badhon252/promptopia",
      live: "https://promptverse.netlify.app/",
    },
    serial: "2",
  },
  // Add more case studies as needed
  {
    slug: "monitoring-dashboard",
    title: "Monitoring Dashboard",
    description:
      "Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system.",
    content: "Detailed information about Project Monitoring Dashboard",
    image: dashboard,
    tech: [igit],
    url: {
      study: "/case-study/monitoring-dashboard",
      github: "https://github.com/badhon252/dashboard",
      live: "https://dashboard-badhon252.netlify.app/",
    },
    serial: "3",
  },
];

export default caseStudies;
