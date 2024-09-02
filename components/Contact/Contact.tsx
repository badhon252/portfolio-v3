import Link from "next/link";
export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative mx-auto min-h-screen p-4 sm:w-11/12 md:w-4/6 xl:w-3/6"
    >
      <h1 className="h1 my-16 text-center text-4xl font-black text-indigo-700 md:text-6xl lg:text-8xl ">
        Let&apos;s Connect
      </h1>

      <article>
        {" "}
        I&apos;m always open to discussing new opportunities, collaborating on
        exciting projects, or simply exchanging ideas. Feel free to reach out
        via{" "}
        <Link
          href="@mailto:dev.khalidhossain@gmail.com"
          className="text-indigo-700"
        >
          email
        </Link>{" "}
        or connect with me on{" "}
        <Link
          href={"https://www.linkedin.com/in/khalidhossainbadhon/"}
          className="text-indigo-700"
        >
          LinkedIn
        </Link>
        . Let&apos;s create something extraordinary together!
      </article>
      <div className="contact-mail my-8 text-blue-700">
        <Link href="#">dev.khalidhossain@gmail.com </Link>
      </div>

      <p className="absolute bottom-10">All rights reserved by @badhon252</p>
    </footer>
  );
}
