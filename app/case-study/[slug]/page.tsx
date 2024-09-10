import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react"; // React functional component type
import caseStudies from "components/CaseStudy/caseStudiesData";

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  technologies: string[];
}

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

const CaseStudyPage: FC<CaseStudyPageProps> = ({ params }) => {
  const { slug } = params;

  const caseStudy: CaseStudy | undefined = caseStudies.find(
    (study) => study.slug === slug,
  );

  if (!caseStudy) {
    notFound(); // Trigger a 404 if the case study is not found
  }

  return (
    <section className="bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-200 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">{caseStudy?.title}</h1>
        <Image
          src={caseStudy?.image}
          alt={caseStudy?.title}
          width={800}
          height={400}
          className="my-4 rounded-lg shadow-lg"
        />
        <p className="text-xl mb-4">{caseStudy?.description}</p>
        <div className="prose max-w-none">{caseStudy?.content}</div>
        <h2 className="text-2xl mt-6">Technologies Used:</h2>
        <ul className="list-disc list-inside">
          {caseStudy?.technologies.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
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
