import Link from "next/link";

export default function Signature() {
  return (
    <div className="contact-mail text-indigo-400 bg-slate-100 dark:bg-slate-950 text-xl text-center py-12">
      <Link href="#" className="email">
        dev.khalidhossain@gmail.com <span className="">{"-->"}</span>
      </Link>
    </div>
  );
}
