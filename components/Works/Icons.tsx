import Image from "next/image";

type IconType = {
  src: string;
  height: number;
  width: number;
};

interface IconsProps {
  icons: IconType[];
}

export default function Icons({ icons }: IconsProps) {
  return (
    <ul className="flex justify-center md:justify-end items-center">
      {icons.map((i, index) => (
        <li key={index} className="m-2 w-8">
          <Image src={i.src} alt="" height={i.height} width={i.width} />
        </li>
      ))}
    </ul>
  );
}
