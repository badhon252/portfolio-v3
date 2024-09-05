import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";

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
}

export default function Project({ img, title, desc, icon }: ProjectProps) {
  return (
    <section className="product my-8 flex flex-col rounded-lg md:flex-row ">
      <div className="product-img md:basis-3/5 ">
        <Image
          src={img}
          alt={`Image for ${title}`} // Enhanced alt text
          className="cursor-pointer rounded-lg border shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>

      <div className="product-details dark:bg-slate-900 rounded-lg flex flex-col items-center justify-center text-left md:basis-2/5  md:items-end md:text-right pr-4">
        <div className="">
          <h1 className="my-4 text-xl font-semibold md:mb-6 md:text-2xl title">
            {title}
          </h1>
          <div className="bg-gradient-to-b from-cyan-100 to-cyan-50 border dark:border-gray-600 dark:text-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-slate-800 text-slate-700 p-4">
            <p className="description mb-4 text-sm md:text-base">{desc}</p>
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
