import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import "./Project.module.css";

interface ProjectProps {
  img: StaticImageData;
  title: string;
  desc: string;
  serial: string;
  tech: string[];
  urls: string[];
}

export default function Project({
  img,
  title,
  desc,
  serial,
  tech,
  urls,
}: ProjectProps) {
  return (
    <section className="product m-8 flex flex-col md:flex-row relative dark:shadow-sky-950/50 my-12 shadow-sm transition-all hover:shadow-lg">
      <div className="product-img md:basis-7/12">
        <Image
          src={img}
          alt={`Image for ${title}`}
          className="cursor-pointer shadow-md transition-shadow duration-300 ease-in-out border object-contain"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>
      <div className="product-details md:basis-5/12 shadow-lg flex flex-col items-center justify-center text-left md:items-end md:text-right md:pr-4 pb-4 hover:z-20 dark:bg-gray-800">
        <h1 className="text-4xl md:text-8xl font-black text-purple-500 absolute left-0 top-0 z-10">
          #{serial}
        </h1>
        <div>
          <h1 className="dark:text-slate-50 font-bold text-xl md:text-2xl p-2">
            {title}
          </h1>
          <div className="product-desc backdrop-blur-lg bg-white/50 dark:bg-black/30 dark:text-gray-100 text-slate-700">
            <article className="description text-sm md:text-base relative z-30 p-4">
              {desc}
            </article>
          </div>
          <div className="tech-stack mb-4">
            <Icons icons={tech} />
          </div>
        </div>
        <ul className="links flex flex-wrap gap-4">
          {urls.map((link, index) => (
            <li className="product-link dark:border-gray-300" key={index}>
              <Link href={link} className="hover:underline">
                {index === 2
                  ? "Code"
                  : index === 1
                  ? "Github"
                  : index === 0
                  ? "Case Study"
                  : "Live"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
