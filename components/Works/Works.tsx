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
    <section className="container relative min-h-screen" id="work">
      <div className="work-title bg-work sticky top-0 my-16  text-center">
        <h1 className=" text-4xl font-black text-indigo-700 md:text-6xl lg:text-8xl">
          Works
        </h1>
        <h3 className="font-medium">Project | Collaboration | Exploration</h3>
      </div>
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
          className="product-link "
          rel="noreferrer"
        >
          Learn more.
        </a>
      </div>
    </section>
  );
}
