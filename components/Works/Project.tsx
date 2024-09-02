import Image from "next/image"
import Link from "next/link"
import Icons from "./Icons"

type IconType = {
  src: string
  height: number
  width: number
}

interface ProjectProps {
  img: any
  title: string
  desc: string
  icon: IconType[]
}

export default function Project({ img, title, desc, icon }: ProjectProps) {
  return (
    <section className="product my-8 flex flex-col gap-8 p-4 md:flex-row ">
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

      <div className="product-details flex flex-col items-start text-left md:basis-2/5  md:items-end md:text-right">
        <div className="">
          <h1 className="my-4 text-2xl font-bold md:mb-6 md:text-4xl">{title}</h1>
          <p className="description mb-4 text-sm md:text-base">{desc}</p>
          <div className="tech-stack mb-4">
            <Icons icons={icon} />
          </div>
        </div>
        <ul className="links flex flex-wrap gap-4">
          <li className="product-link">
            <Link href="/case-study">
              <p className=" hover:underline">Case Study</p>
            </Link>
          </li>
          <li className="product-link">
            <Link href="#">
              <p className=" hover:underline">Github</p>
            </Link>
          </li>
          <li className="product-link">
            <Link href="#">
              <p className=" hover:underline">Live</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
