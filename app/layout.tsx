import "styles/tailwind.css";
import "styles/global.css";
import Navbar from "components/Nav/Navbar";
import CustomCursor from "components/Theme/CustomCursor";

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
