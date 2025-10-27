import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import BackgroundCanvas from "./backgroundCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moje Portfolio",
  description: "Portfolio Frontend Developera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`flex justify-center items-center relative min-h-screen`}
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
          <div className="flex flex-col w-[30%] portfolio-frame-menu">
            {/* Ikona hamburgera */}
            <div className="hamburger-menu-icon absolute left-8 top-3 py-3">
              <Image
                alt="Menu"
                width={30}
                height={30}
                className="cursor-pointer"
                src="/assets/images/hamburger.svg"
              />
            </div>

            {/* Dane osobowe */}
            <div className="pt-3 text-[50px] font-normal whitespace-nowrap">
              Piotr Bogus
            </div>
            <div className="py-1 text-[16px] font-normal whitespace-nowrap">
              Programista Frontend
            </div>

            {/* Przełącznik języka */}
            <div className="flex gap-2 font-normal mt-5 mb-12 px-1 relative">
              <div className="flex justify-center items-center text-black w-8 h-8 cursor-pointer select-none portfolio-background-option lang-select">
                PL
              </div>

              {/* rozwijane menu języków */}
              <div className="absolute top-10 left-1 hidden flex-col text-black rounded-md shadow-lg p-1 space-y-1">
                <div className="flex justify-center items-center w-8 h-8 cursor-pointer hover:bg-gray-700">
                  EN
                </div>
                <div className="flex justify-center items-center w-8 h-8 cursor-pointer hover:bg-gray-700">
                  PL
                </div>
                <div className="flex justify-center items-center w-8 h-8 cursor-pointer hover:bg-gray-700">
                  DE
                </div>
              </div>
            </div>

            {/* Menu główne */}
            <nav className="flex flex-col text-[16px] font-normal px-6 py-2 gap-3 portfolio-menu">
              <span className="flex items-center gap-2 leading-[25px] w-fit">
                — <span className="cursor-pointer hover:text-blue-400 portfolio-menu-link">Doświadczenie</span>
              </span>
              <span className="flex items-center gap-2 leading-[25px] w-fit">
                — <span className="cursor-pointer hover:text-blue-400 portfolio-menu-link">Certyfikaty</span>
              </span>
              <span className="flex items-center gap-2 leading-[25px] w-fit">
                — <span className="cursor-pointer hover:text-blue-400 portfolio-menu-link">Projekty</span>
              </span>
            </nav>

            {/* Hamburger menu (mobilne) */}
            <div className="hidden hamburger-menu absolute inset-0 bg-black/80 flex-col items-center justify-center text-white text-[16px] p-5 gap-3">
              <div className="absolute top-4 left-8">
                <Image
                  alt="Menu"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                  src="/assets/images/hamburger.svg"
                />
              </div>
              <span className="cursor-pointer hover:text-blue-400">
                Doświadczenie
              </span>
              <span className="cursor-pointer hover:text-blue-400">
                Certyfikaty
              </span>
              <span className="cursor-pointer hover:text-blue-400">
                Projekty
              </span>
            </div>
          </div>

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