"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function PortfolioMenu() {
  return (
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
      <div className="text-[50px] font-normal pt-3 whitespace-nowrap">
        Piotr Bogus
      </div>
      <div className="text-[16px] font-normal whitespace-nowrap">
        Programista Frontend
      </div>

      {/* Przełącznik języka */}
      <div className="flex gap-2 font-normal mt-5 mb-12 px-1 relative">
        <LanguageSwitcher />
      </div>

      {/* Menu główne */}
      <nav className="flex flex-col text-[16px] font-normal px-6 py-2 gap-3 portfolio-menu">
        <Link href="/experience" className="flex items-center gap-2 leading-[25px] w-fit">
          — <span className="cursor-pointer portfolio-menu-link">Doświadczenie</span>
        </Link>
        <Link href="/certificates" className="flex items-center gap-2 leading-[25px] w-fit">
          — <span className="cursor-pointer portfolio-menu-link">Certyfikaty</span>
        </Link>
        <Link href="/projects" className="flex items-center gap-2 leading-[25px] w-fit">
          — <span className="cursor-pointer portfolio-menu-link">Projekty</span>
        </Link>
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
        <span className="cursor-pointer hover:text-blue-400">Doświadczenie</span>
        <span className="cursor-pointer hover:text-blue-400">Certyfikaty</span>
        <span className="cursor-pointer hover:text-blue-400">Projekty</span>
      </div>
    </div>
  );
}
