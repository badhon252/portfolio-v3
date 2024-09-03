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
    <ul className="flex">
      {icons.map((i, index) => (
        <li key={index} className="mx-2 my-4 w-9">
          <Image src={i.src} alt="" height={i.height} width={i.width} />
        </li>
      ))}
    </ul>
  );
}
