import Link from "next/link";
export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-200 "
    >
      <main className="flex justify-around flex-col mx-auto min-h-screen p-4 sm:w-11/12 md:w-4/6 xl:w-3/6 ">
        <section>
          <h1 className="h1 my-16 text-center text-4xl font-black  md:text-6xl lg:text-8xl ">
            Let&apos;s Connect
          </h1>

          <article>
            {" "}
            I&apos;m always open to discussing new opportunities, collaborating
            on exciting projects, or simply exchanging ideas. Feel free to reach
            out via{" "}
            <Link
              href="@mail:dev.khalidhossain@gmail.com"
              className="text-indigo-500 underline"
            >
              email
            </Link>{" "}
            or connect with me on{" "}
            <Link
              href={"https://www.linkedin.com/in/khalidhossainbadhon/"}
              className="text-indigo-500 underline"
            >
              LinkedIn
            </Link>
            . Let&apos;s create something extraordinary together!
          </article>
        </section>
        <section>
          <h1 className="h2 text-2xl font-semibold my-4">Connect me on.</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#">URL</Link>
            </li>
            <li>
              <Link href="#">URL</Link>
            </li>
            <li>
              <Link href="#">URL</Link>
            </li>
            <li>
              <Link href="#">URL</Link>
            </li>
            <li>
              <Link href="#">URL</Link>
            </li>
          </ul>
        </section>

        <p className="text-center">
          All rights reserved by{" "}
          <Link
            href="https://github.com/badhon252"
            className="text-indigo-500 underline"
          >
            {" "}
            @badhon252
          </Link>
        </p>
      </main>
    </footer>
  );
}
