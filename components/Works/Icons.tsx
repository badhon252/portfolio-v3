import Image from "next/image";

interface IconsProps {
  icons: string[];
}

export default function Icons({ icons }: IconsProps) {
  return (
    <ul className="flex justify-center md:justify-end items-center">
      {icons.map((i, index) => (
        <li key={index} className="m-2 w-8">
          <Image src={i} alt="" />
        </li>
      ))}
    </ul>
  );
}
