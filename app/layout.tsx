import { Metadata } from "next";
import "styles/tailwind.css";
import "styles/global.css";
import Navbar from "components/Nav/Navbar";
import CustomCursor from "components/Theme/CustomCursor";

export const metadata: Metadata = {
  title: "Khalid Hossain | Expert Reactjs Developer",
  description:
    "Passionate Software Engineer with expertise in JavaScript and Python, specializing in crafting high-quality web applications. Proficient in Next.js for building efficient andscalable solutions. Dedicated to delivering exceptional user experiences throughcutting-edge technologies.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
