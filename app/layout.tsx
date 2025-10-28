
import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import BackgroundCanvas from "./backgroundCanvas";
import LanguageSwitcher from "./components/LanguageSwitcher";
import PortfolioMenu from "./components/PortfolioMenu";

export const metadata: Metadata = {
  title: "Moje Portfolio",
  description: "Piotr Bogus - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`flex justify-center items-center`}
      >
        {/* Tło */}
        {/* <canvas id="background" className="absolute opacity-20 inset-0"></canvas> */}
        <BackgroundCanvas />

        {/* Ikony społecznościowe */}
        <div className="absolute top-0 right-[60px] py-3">
          <Image
            className="cursor-pointer portfolio-socials"
            alt="LinkedIn"
            width={20}
            height={20}
            src="/assets/images/linkedin.svg"
          />
        </div>

        {/* Główna ramka */}
        <div className="flex flex-row w-full h-full portfolio-frame">
          {/* Menu po lewej */}
          <PortfolioMenu />

          {/* Zawartość po prawej */}
          <div className="flex flex-row h-full w-[70%] font-medium p-4 gap-5 portfolio-content">
            <div className="portfolio-content-inner flex-1">{children}</div>
            <div className="custom-scrollbar"></div>
          </div>
        </div>
      </body>
    </html>
  );
}