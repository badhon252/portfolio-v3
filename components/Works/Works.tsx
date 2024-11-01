import caseStudies from "components/CaseStudy/caseStudiesData"; // Import the data
import Project from "./Project"; // Import the Project component

export default function Work() {
  return (
    <section
      className="bg-gradient-to-b from-slate-50 to-slate-100 dark:text-gray-100 dark:bg-gradient-to-b dark:from-slate-800 dark:to-gray-950 text-slate-700"
      id="work"
    >
      <main className="container mx-auto md:w-4/6">
        <div className="work-title bg-work py-16 text-center">
          <h1 className="text-4xl font-black md:text-6xl lg:text-8xl">Works</h1>
          <h2 className="text-purple-500 inline-block font-medium px-4 tracking-widest">
            Project | Collaboration | Exploration
          </h2>
        </div>
        <div className="my-projects">
          {/* Loop through each case study and render a Project component */}
          {caseStudies.map((study) => (
            <Project
              key={study.slug}
              img={study.image}
              title={study.title}
              desc={study.description}
              serial={study.serial}
              tech={study.tech}
              urls={[study.url.study, study.url.github, study.url.live]}
            />
          ))}
        </div>
        <div className="mx-auto text-center p-16">
          <a
            target="_blank"
            href="https://github.com/badhon252"
            className="product-link dark:border-gray-400 text-slate-800 dark:text-slate-50"
            rel="noreferrer"
          >
            More Projects...
          </a>
        </div>
      </main>
    </section>
  );
}
