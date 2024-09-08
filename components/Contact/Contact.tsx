"use client";
import Link from "next/link";
import "./Contact.module.css";
import Signature from "./Signature";
export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-slate-50 to-cyan-100  dark:text-gray-100 dark:bg-gradient-to-b dark:from-slate-800 dark:to-gray-950 text-slate-700 "
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
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <h1 className="h2 text-xl font-bold my-4 border-b">
                Connect me Via.
              </h1>
              <ul className="flex flex-col gap-4 social-links my-4">
                <li>
                  <Link
                    href="https://www.facebook.com/badhon252"
                    target="_blank"
                    className="underline"
                  >
                    @facebook/badhon252
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/khalidhossainbadhon/"
                    target="_blank"
                    className="underline"
                  >
                    @linkedin/khalidhossainbadhon
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/badhon252/"
                    target="_blank"
                    className="underline"
                  >
                    @github/badhon252
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/khalidhossainbadhon"
                    target="_blank"
                    className="underline"
                  >
                    @t.me/khalidhossain
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/badhon252"
                    target="_blank"
                    className="underline"
                  >
                    @twitter.com/badhon252
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              {" "}
              <h1 className="text-xl font-bold py-4 border-b">Freelance: </h1>
              <ul>
                <li className="my-4 underline">
                  <Link href={"https://www.upwork.com/freelancers/badhon252"}>
                    @Upwork/badhon252
                  </Link>
                </li>
                <li className="my-4 underline">
                  <Link href={"https://www.fiverr.com/fiverr/dev_khalid_007"}>
                    @fiverr/dev_khalid_007
                  </Link>
                </li>
              </ul>
            </div>

            <Signature />
          </div>
        </section>

        <p className="text-center opacity-60 hover:opacity-80">
          All rights reserved by{" "}
          <Link
            href="https://github.com/badhon252"
            className="text-blue-400 underline"
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
