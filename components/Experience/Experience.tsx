import "styles/style.css"
export default function Experience() {
  return (
    <main className="container mx-auto">
      <section id="experience" className="sm:w-12/12 mx-auto flex h-screen flex-col justify-center md:w-4/6 xl:w-3/6">
        <h1 className="h1 text-bold my-8 text-center text-4xl font-black  md:text-6xl lg:text-8xl ">Experiences</h1>

        <div className="experience my-12 flex flex-wrap">
          <div className="basis-1/3 text-lg font-semibold ">
            <ul className="company">
              <li className="brlbd me-12 rounded-lg border px-2">Babylon Resource ltd</li>{" "}
              <li className="brlbd my-2 me-12 rounded-lg border px-2">Freelance</li>
            </ul>
          </div>
          <div className="basis-2/3 border-l-2 border-slate-100 px-8">
            <h2 className="text-xl font-extrabold">Python Progamming Instructor </h2>
            <p className="time-span text-sm ">November 2023 - present</p>
            <ul className="my-4">
              {/* <li className="experience-details my-4">
              <article>
                “Sheikh Russel Digital Lab” is a flagship project of the
                Government of Bangladesh for meeting the demand of Digital
                Bangladesh aligned with SDG and for strengthening institutional
                capacity ensuring the quality of education by the highest use of
                ICT.
              </article>
              </li> */}
              <li className="experience-details my-4">
                <article>
                  <b>Delivered Comprehensive Training:</b> Led engaging and practical Python programming courses,
                  passionately teaching a diverse group of students and equipping them with essential skills in Python
                  for real-world applications.
                </article>
              </li>
              <li className="experience-details my-4">
                <article>
                  <b>Developed Custom Curricula:</b> Created and refined course materials to meet the evolving needs of
                  students, ensuring a deep understanding of Python fundamentals, object-oriented programming, and
                  advanced concepts.
                </article>
              </li>
              <li className="experience-details my-4">
                <article>
                  <b>Achieved High Student Success Rates:</b> Fostered an interactive learning environment, resulting in
                  exceptional student performance and high course completion rates. Received positive feedback for
                  making complex topics accessible and engaging.
                </article>
              </li>{" "}
              <li className="experience-details my-4">
                <article>
                  <b>Mentored Aspiring Developers:</b> Provided ongoing support and mentorship to students, helping them
                  build confidence in their coding abilities and guiding them in their journey towards becoming
                  proficient Python developers.
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
