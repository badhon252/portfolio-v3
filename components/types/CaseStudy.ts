interface CaseStudyProp {
  slug: string;
  title: string;
  moto: string;
  description: string;
  challengesAndSolutions: {
    challenge: string[];
    solution: string;
  }[];
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
  image: string;
  tech: string[];
  stack: string[];
  url: {
    study: string;
    github: string;
    live: string;
  };
  serial: string;
}

export type { CaseStudyProp };
