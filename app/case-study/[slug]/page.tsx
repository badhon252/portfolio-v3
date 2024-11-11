import { notFound } from "next/navigation";
import { FC } from "react";
import CaseStudy from "components/CaseStudy/case-study";
import caseStudies from "components/CaseStudy/caseStudiesData";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

const CaseStudyPage: FC<CaseStudyPageProps> = ({ params }) => {
  const { slug } = params;

  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    notFound(); // Trigger a 404 if the case study is not found
  }

  return (
    <section className="bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-200 min-h-screen">
      <CaseStudy caseStudyData={caseStudy} />
    </section>
  );
};

// Generate static paths at build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default CaseStudyPage;
