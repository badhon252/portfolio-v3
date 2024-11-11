import { StaticImageData } from "next/image";
interface CaseStudyProp {
  serial: number;
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
}

export type { CaseStudyProp };
