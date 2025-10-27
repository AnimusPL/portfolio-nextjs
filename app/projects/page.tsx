"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  Name: string;
  Date: string;
  GitHubUrl: string;
  TestUrl?: string;
  Description: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  // 🔹 Pobranie danych z JSON (z public/data/projects.json)
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.Projects)) // 👈 duża litera zgodna z Twoim JSONem
      .catch((err) => console.error("Błąd wczytywania projektów:", err));
  }, []);

  return (
    <main className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl font-semibold text-gray-900">Projekty</h1>

      {/* Karty projektów */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 rounded-xl p-6 gap-4 shadow-sm hover:shadow-md transition-all portfolio-project bg-white"
          >
            {/* Nazwa + ikony */}
            <div className="flex flex-row items-center gap-3 text-[#121212] text-xl font-semibold">
              <span>{project.Name}</span>

              {/* GitHub link */}
              <Image
                src="/assets/images/github-mark-white.svg"
                alt="GitHub"
                width={22}
                height={22}
                className="cursor-pointer hover:opacity-80"
                onClick={() => window.open(project.GitHubUrl, "_blank")}
              />

              {/* Test link (opcjonalny) */}
              {project.TestUrl && project.TestUrl.trim() !== "" && (
                <Image
                  src="/assets/images/preview.svg"
                  alt="Preview"
                  width={24}
                  height={24}
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => window.open(project.TestUrl!, "_blank")}
                />
              )}
            </div>

            {/* Data */}
            <div className="text-[17px] font-medium text-gray-600">
              {project.Date}
            </div>

            {/* Opis */}
            <div className="text-[15px] font-normal text-gray-800 leading-6">
              {project.Description}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
