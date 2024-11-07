// assets for icons
import { StaticImageData } from "next/image";
import gitIcon from "public/Assets/image/git.svg";
import nextIcon from "public/Assets/image/Nextjs.svg";
import prismaIcon from "public/Assets/image/prisma.svg";
import reactIcon from "public/Assets/image/react.svg";
import typescriptIcon from "public/Assets/image/typescript.svg";

// assets for project images
import dashboardImage from "public/Assets/projects/dashboard.gif";
import prismaStoreImage from "public/Assets/projects/prisma-store.gif";
import promptopiaImage from "public/Assets/projects/promptopia.gif";
import readatAbout from "public/Assets/readat/about.png";
import readatHome from "public/Assets/readat/home.png";

interface CaseStudy {
  slug: string;
  title: string;
  moto: string;
  description: string;
  challengesAndSolutions: {
    challenge: string[];
    solution: string[];
  }[];
  color: string;
  features: string[];
  resultsAndImpact: string;
  lessonsLearned: string;
  installation: {
    steps: string[];
  };
  structure: {
    navigation: string[];
    heroSection: string;
    categories: string[];
    categoryPages: string;
  };
  image: StaticImageData;
  logo: StaticImageData;
  tech: string[];
  stack: string[];
  url: {
    study: string;
    github: string;
    live: string;
  };
  serial: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    serial: "1",
    slug: "readat",
    title: "ReadAT (ACONEWS)",
    moto: "Simplifying Digital News Accessibility Across Devices",
    description:
      "ACONEWS is a comprehensive news aggregator app built with Next.js, React, and Tailwind CSS. It provides an accessible and responsive interface for users to stay informed with the latest articles from top news sources such as GNews.io, The New York Times, and The Guardian.",
    color: "#FF6B6B",
    image: readatHome,
    tech: [gitIcon, nextIcon, reactIcon, typescriptIcon],
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "GNews.io API",
      "Zustand",
    ],
    challengesAndSolutions: [
      {
        challenge: [
          "Ensuring a smooth user experience across devices.",
          "Fetching and displaying dynamic news data efficiently.",
        ],
        solution: [
          "Leveraged Tailwind CSS for responsive design, optimizing components for mobile and desktop.",
          "Implemented Zustand for state management to fetch news data once and distribute it across components.",
        ],
      },
    ],
    features: [
      "Fetches news articles from the GNews.io API",
      "Displays articles in a grid layout with responsive design",
      "Search functionality to find specific news articles",
      "Tailwind CSS styling for mobile and desktop optimization",
    ],
    resultsAndImpact:
      "Successfully enhanced digital news accessibility, with a user-friendly layout that adapts to both mobile and desktop views. Increased user engagement by providing instant access to the latest news from trusted sources.",
    lessonsLearned:
      "The importance of optimizing API calls for performance, ensuring mobile-first design, and balancing client-side rendering with server-side rendering for SEO and speed.",
    installation: {
      steps: [
        "Clone the repository: git clone https://github.com/badhon252/ACONEWS.git",
        "Install dependencies: npm install",
        "Run the development server: npm run dev",
        "Open http://localhost:3000 to view the app",
      ],
    },
    logo: prismaIcon,
    structure: {
      navigation: [
        "Explore: Navigate across all news categories",
        "About: Information on our mission, case studies, and useful links",
        "Contact: Inquiries or collaboration requests",
        "Search: Search for articles across categories",
      ],
      heroSection:
        "An interactive carousel slider featuring navigation buttons to explore articles.",
      categories: [
        "Grid layout displaying news cards with image, title, publish time, and publisher name.",
        "'See All' button to access more articles in each category",
      ],
      categoryPages:
        "Interactive carousel within each category, allowing users to explore all relevant articles.",
    },

    url: {
      study: "/case-study/readat",
      github: "https://github.com/badhon252/ACONEWS",
      live: "https://www.prismastore.tech/",
    },
  },

  {
    serial: "2",
    slug: "prisma-store",
    title: "Prisma-Store",
    moto: "Simplifying Digital Commerce to Drive Businesses!",
    description:
      "Prisma Store is an eCommerce and Web Content Management Application with integrated Stripe payment system.",
    color: "#FF6B6B",
    image: prismaStoreImage,
    tech: [gitIcon, nextIcon, reactIcon, typescriptIcon],
    stack: [
      "NEXT.js",
      "React.js",
      "TypeScript",
      "Tailwindcss",
      "Shadcn-ui",
      "Zustand",
      "Prisma ORM",
      "postgreSQL",
      "Clerk",
    ],
    challengesAndSolutions: [
      {
        challenge: [
          "Ensuring a smooth user experience across devices.",
          "Fetching and displaying dynamic news data efficiently.",
        ],
        solution: [
          "Leveraged Tailwind CSS for responsive design, optimizing components for mobile and desktop.",
          "Implemented Zustand for state management to fetch news data once and distribute it across components.",
        ],
      },
    ],
    features: [
      "Complete Stripe integration",
      "Content Management Capabilities",
      "Built with Prisma and Zustand",
    ],
    resultsAndImpact:
      "Successfully enhanced digital news accessibility, with a user-friendly layout that adapts to both mobile and desktop views. Increased user engagement by providing instant access to the latest news from trusted sources.",
    lessonsLearned:
      "The importance of optimizing API calls for performance, ensuring mobile-first design, and balancing client-side rendering with server-side rendering for SEO and speed.",
    installation: {
      steps: [
        "Clone the repository: git clone https://github.com/badhon252/ACONEWS.git",
        "Install dependencies: npm install",
        "Run the development server: npm run dev",
        "Open http://localhost:3000 to view the app",
      ],
    },
    logo: prismaIcon,
    structure: {
      navigation: [
        "Explore: Navigate across all news categories",
        "About: Information on our mission, case studies, and useful links",
        "Contact: Inquiries or collaboration requests",
        "Search: Search for articles across categories",
      ],
      heroSection:
        "An interactive carousel slider featuring navigation buttons to explore articles.",
      categories: [
        "Grid layout displaying news cards with image, title, publish time, and publisher name.",
        "'See All' button to access more articles in each category",
      ],
      categoryPages:
        "Interactive carousel within each category, allowing users to explore all relevant articles.",
    },
    url: {
      study: "/case-study/prisma-store",
      github: "https://github.com/badhon252/PrismaStore-client",
      live: "https://www.prismastore.tech/",
    },
  },

  {
    serial: "3",
    slug: "promptopia",
    title: "Promptopia",
    moto: "Generate and share prompts to excell your future!",
    description:
      "A platform to post and share creative AI prompts to enhance productivity. Search or generate prompts for your work.",
    color: "#FF6B6B",
    image: promptopiaImage,
    tech: [gitIcon, reactIcon, typescriptIcon],
    stack: ["React.js", "TailwindCSS", "openAI"],
    challengesAndSolutions: [
      {
        challenge: [
          "Ensuring a smooth user experience across devices.",
          "Fetching and displaying dynamic news data efficiently.",
        ],
        solution: [
          "Leveraged Tailwind CSS for responsive design, optimizing components for mobile and desktop.",
          "Implemented Zustand for state management to fetch news data once and distribute it across components.",
        ],
      },
    ],
    features: [
      "User-generated AI prompts",
      "Community-driven content",
      "Search and generate functionality",
    ],
    resultsAndImpact:
      "Successfully enhanced digital news accessibility, with a user-friendly layout that adapts to both mobile and desktop views. Increased user engagement by providing instant access to the latest news from trusted sources.",
    lessonsLearned:
      "The importance of optimizing API calls for performance, ensuring mobile-first design, and balancing client-side rendering with server-side rendering for SEO and speed.",
    installation: {
      steps: [
        "Clone the repository: git clone https://github.com/badhon252/ACONEWS.git",
        "Install dependencies: npm install",
        "Run the development server: npm run dev",
        "Open http://localhost:3000 to view the app",
      ],
    },
    logo: nextIcon,
    structure: {
      navigation: [
        "Explore: Navigate across all news categories",
        "About: Information on our mission, case studies, and useful links",
        "Contact: Inquiries or collaboration requests",
        "Search: Search for articles across categories",
      ],
      heroSection:
        "An interactive carousel slider featuring navigation buttons to explore articles.",
      categories: [
        "Grid layout displaying news cards with image, title, publish time, and publisher name.",
        "'See All' button to access more articles in each category",
      ],
      categoryPages:
        "Interactive carousel within each category, allowing users to explore all relevant articles.",
    },
    url: {
      study: "/case-study/promptopia",
      github: "https://github.com/badhon252/promptopia",
      live: "https://promptverse.netlify.app/",
    },
  },
  {
    serial: "4",
    slug: "monitoring-dashboard",
    title: "Monitoring Dashboard",
    moto: "Monitor and take important decisions on cyber threat!",
    description:
      "A comprehensive monitoring dashboard for system performance tracking.",
    color: "#FF6B6B",
    image: dashboardImage,
    tech: [gitIcon, reactIcon, typescriptIcon],
    stack: ["React.js", "TailwindCSS", "openAI"],
    challengesAndSolutions: [
      {
        challenge: [
          "Ensuring a smooth user experience across devices.",
          "Fetching and displaying dynamic news data efficiently.",
        ],
        solution: [
          "Leveraged Tailwind CSS for responsive design, optimizing components for mobile and desktop.",
          "Implemented Zustand for state management to fetch news data once and distribute it across components.",
        ],
      },
    ],
    features: [
      "Real-time monitoring",
      "Customizable dashboard",
      "Built with React and TailwindCSS",
    ],
    resultsAndImpact:
      "Successfully enhanced digital news accessibility, with a user-friendly layout that adapts to both mobile and desktop views. Increased user engagement by providing instant access to the latest news from trusted sources.",
    lessonsLearned:
      "The importance of optimizing API calls for performance, ensuring mobile-first design, and balancing client-side rendering with server-side rendering for SEO and speed.",
    installation: {
      steps: [
        "Clone the repository: git clone https://github.com/badhon252/ACONEWS.git",
        "Install dependencies: npm install",
        "Run the development server: npm run dev",
        "Open http://localhost:3000 to view the app",
      ],
    },
    logo: nextIcon,
    structure: {
      navigation: [
        "Explore: Navigate across all news categories",
        "About: Information on our mission, case studies, and useful links",
        "Contact: Inquiries or collaboration requests",
        "Search: Search for articles across categories",
      ],
      heroSection:
        "An interactive carousel slider featuring navigation buttons to explore articles.",
      categories: [
        "Grid layout displaying news cards with image, title, publish time, and publisher name.",
        "'See All' button to access more articles in each category",
      ],
      categoryPages:
        "Interactive carousel within each category, allowing users to explore all relevant articles.",
    },
    url: {
      study: "/case-study/monitoring-dashboard",
      github: "https://github.com/badhon252/dashboard",
      live: "https://dashboard-badhon252.netlify.app/",
    },
  },
];

export default caseStudiesData;
