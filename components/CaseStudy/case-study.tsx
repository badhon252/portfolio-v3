import Image from "next/image"
import Link from "next/link"

interface CaseStudyProps {
  img: string
  title: string
  overview: string
  objectives: string
  approach: string
  challenges: string
  results: string
}

const caseStudy: CaseStudyProps = {
  img: "/path/to/your/image.jpg", // Update with your image path
  title: "Innovative Project Management Tool",
  overview: "A comprehensive tool developed to streamline project management and enhance team collaboration.",
  objectives:
    "1. To simplify task tracking and project organization.\n2. To improve team communication and document sharing.\n3. To provide real-time project insights and analytics.",
  approach:
    "Implemented a web-based platform using modern technologies including Next.js for the frontend, Node.js for the backend, and PostgreSQL for the database. Utilized a modular approach to ensure scalability and maintainability.",
  challenges:
    "1. Integrating real-time data synchronization across different users.\n2. Ensuring data security and privacy for sensitive project information.\n3. Handling high concurrency and performance optimization.",
  results:
    "1. Reduced project management overhead by 30%.\n2. Enhanced team productivity and communication.\n3. Achieved a 95% user satisfaction rate based on feedback.",
}

export default function CaseStudy() {
  return (
    <div className="case-study container mx-auto px-4 py-8">
      <h1 className="mb-6 text-4xl font-bold">{caseStudy.title}</h1>

      <div className="mb-8 flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <Image
            src={caseStudy.img}
            alt={`Image for ${caseStudy.title}`}
            className="rounded-lg shadow-md"
            layout="responsive"
            width={800}
            height={450}
          />
        </div>

        <div className="flex-1">
          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold">Project Overview</h2>
            <p className="text-lg">{caseStudy.overview}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold">Objectives</h2>
            <p className="whitespace-pre-line text-lg">{caseStudy.objectives}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold">Approach</h2>
            <p className="whitespace-pre-line text-lg">{caseStudy.approach}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold">Challenges</h2>
            <p className="whitespace-pre-line text-lg">{caseStudy.challenges}</p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-3xl font-semibold">Results</h2>
            <p className="whitespace-pre-line text-lg">{caseStudy.results}</p>
          </section>
        </div>
      </div>

      <Link href="/" className="text-lg text-blue-500 hover:underline">
        Back to Projects{" "}
      </Link>
    </div>
  )
}
