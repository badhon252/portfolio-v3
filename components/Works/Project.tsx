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
    <section className="product m-8 flex flex-col  md:flex-row relative border rounded-2xl">
      <div className="product-img md:basis-3/5 ">
        <Image
          src={img}
          alt={`Image for ${title}`} // Enhanced alt text
          className="cursor-pointer  shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg border rounded-s-xl object-contain"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>

      <div className="product-details  bg-teal-50 dark:bg-slate-900 rounded-lg flex flex-col items-center justify-center text-left md:basis-2/5  md:items-end md:text-right md:pr-4 p-4 hover:z-20">
        <h1 className="text-4xl md:text-8xl font-black text-purple-500 absolute left-0 top-0 z-10">
          #{serial}
        </h1>
        <div className="">
          <h1 className="text-neoncyan-500 dark:text-slate-50 font-bold text-xl md:text-2xl p-2 rounded-sm">
            {title}
          </h1>

          {/* Bug: How to blur background?  */}
          <div className="product-desc min-h-32 bg-gradient-to-b from-cyan-100 to-cyan-50 border dark:border-gray-600 dark:text-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-slate-800 text-slate-700 ">
            <article className="description mb-4 text-sm md:text-base relative z-30">
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
