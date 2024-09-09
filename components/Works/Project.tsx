// card for projects that I have worked on.

import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";
import "./Project.module.css";

type IconType = {
  src: string;
  height: number;
  width: number;
};

interface ProjectProps {
  img: any;
  title: string;
  desc: string;
  icon: IconType[];
  serial: string;
}

export default function Project({
  img,
  title,
  desc,
  icon,
  serial,
}: ProjectProps) {
  return (
    <section className="product m-8 flex flex-col  md:flex-row relative dark:shadow-sky-950/50 my-12 shadow-sm transition-all hover:shadow-lg">
      <div className="product-img md:basis-7/12 ">
        <Image
          src={img}
          alt={`Image for ${title}`} // Enhanced alt text
          className="cursor-pointer shadow-md transition-shadow duration-300 ease-in-out  border  object-contain"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>
      {/* product-details/ */}
      <div className="product-details md:basis-5/12 shadow-lg flex flex-col items-center justify-center text-left md:items-end md:text-right md:pr-4 pb-4 hover:z-20 dark:bg-gray-800">
        <h1 className="text-4xl md:text-8xl font-black text-purple-500 absolute left-0 top-0 z-10">
          #{serial}
        </h1>
        <div className="">
          <h1 className=" dark:text-slate-50 font-bold text-xl md:text-2xl p-2 ">
            {title}
          </h1>

          {/* Bug: How to blur background?  */}
          <div className="product-desc backdrop-blur-lg bg-white/50 dark:bg-black/30 dark:text-gray-100 text-slate-700 ">
            <article className="description text-sm md:text-base relative z-30 p-4">
              {desc}
            </article>
          </div>

          <div className="tech-stack mb-4">
            <Icons icons={icon} />
          </div>
        </div>
        <ul className="links flex flex-wrap gap-4">
          <li className="product-link dark:border-gray-300 ">
            <Link href="/case-study">
              <p className=" hover:underline ">Case Study</p>
            </Link>
          </li>
          <li className="product-link dark:border-gray-300 ">
            <Link href="#">
              <p className=" hover:underline">Github</p>
            </Link>
          </li>
          <li className="product-link dark:border-gray-300 ">
            <Link href="#">
              <p className=" hover:underline">Live</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
