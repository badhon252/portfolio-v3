import Link from "next/link";
import "./Contact.module.css";

export default function Signature() {
  return (
    <div className="my-8 contact-mail px-4 py-2 bg-indigo-500 text-white rounded text-center ">
      <Link href="mailto:dev.khalidhossain@gmail.com" className="email">
        dev.khalidhossain@gmail.com{" "}
        <span className="email-indicator">{" --> "}</span>
      </Link>
    </div>
  );
}
