"use client";
import Link from "next/link";
import "./Contact.module.css";
import Signature from "./Signature";
export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-slate-100 dark:bg-slate-900 text-slate-950 dark:text-slate-200 "
    >
      <main className="flex justify-between flex-col mx-auto min-h-screen p-4 sm:w-11/12 md:w-4/6 xl:w-3/6 text-base">
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
              href="mailto:dev.khalidhossain@gmail.com"
              className="text-indigo-500"
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
        {/* Connect with me ================= */}
        <section>
          <h1 className="h2 text-2xl font-semibold my-4  border-b">
            Connect me Via.
          </h1>
          <div className="flex justify-between items-center flex-wrap">
            <ul className="flex flex-col gap-4 social-links">
              <li>
                <Link
                  href="https://www.facebook.com/badhon252"
                  target="_blank"
                  className="text-indigo-500"
                >
                  @facebook/badhon252
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/khalidhossainbadhon/"
                  target="_blank"
                  className="text-indigo-500"
                >
                  @linkedin/khalidhossainbadhon
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/badhon252/"
                  target="_blank"
                  className="text-indigo-500"
                >
                  @github/badhon252
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/khalidhossainbadhon"
                  target="_blank"
                  className="text-indigo-500"
                >
                  @t.me/khalidhossain
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/badhon252"
                  target="_blank"
                  className="text-indigo-500"
                >
                  @twitter.com/badhon252
                </Link>
              </li>
            </ul>
            <Signature />
          </div>
        </section>

        <p className="text-center opacity-60 hover:opacity-80">
          All rights reserved by{" "}
          <Link
            href="https://github.com/badhon252"
            className="text-indigo-500 underline"
          >
            {" "}
            @badhon252
          </Link>
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 p-2 bg-indigo-500 text-white rounded-full"
        >
          ↑ Top
        </button>
      </main>
    </footer>
  );
}
