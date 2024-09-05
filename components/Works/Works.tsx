import igit from "Assets/image/git.svg";
import inext from "Assets/image/Nextjs.svg";
import iprisma from "Assets/image/prisma.svg";
import ireact from "Assets/image/react.svg";
import itypescript from "Assets/image/typescript.svg";
import p01 from "Assets/Prisma-store/p01.png";
import Project from "./Project";

export default function Work() {
  const icons = [ireact, inext, itypescript, igit, iprisma];
  return (
    <section
      className="bg-gradient-to-b from-slate-100 to-cyan-50  dark:text-gray-100 dark:bg-gradient-to-b dark:from-slate-800 dark:to-gray-950 text-slate-700 "
      id="work"
    >
      <main className="container mx-auto">
        <div className="work-title bg-work py-16  text-center">
          <h1 className=" text-4xl font-black md:text-6xl lg:text-8xl">
            Works
          </h1>
          <h3 className=" title inline-block px-4 tracking-widest">
            Project | Collaboration | Exploration
          </h3>
        </div>
        {/* Projects that I have worked on. */}
        <Project
          img={p01}
          title="Prisma-Store"
          desc="Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system. Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system."
          icon={icons}
        />{" "}
        <Project
          img={p01}
          title="Prisma-Store"
          desc="Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system. Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system."
          icon={icons}
        />{" "}
        <Project
          img={p01}
          title="Prisma-Store"
          desc="Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system. Prisma Store eCommerce Store & Web Content management Application (CMA). Complete integreted Stripe payment system."
          icon={icons}
        />
        <div className="mx-auto pb-16 text-center">
          <a
            target="_blank"
            href="https://github.com/badhon252"
            className="product-link dark:border-gray-400 bg-indigo-700 text-white text-xl"
            rel="noreferrer"
          >
            More Projects
          </a>
        </div>{" "}
      </main>
    </section>
  );
}
