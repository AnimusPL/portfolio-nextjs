"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";

interface Project {
  Name: string;
  Date: string;
  GitHubUrl: string;
  TestUrl?: string;
  Description: string;
}

export default function ProjectsPage() {
  const { dictionary } = useLang(); // 🔹 użycie hooka LangContext
  const [projects, setProjects] = useState<Project[]>([]);

  // 🔹 Pobranie danych z JSON (z public/data/projects.json)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/projects.json");
        const data = await res.json();
        setProjects(data.Projects);
      } catch (err) {
        console.error("Błąd wczytywania projektów:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl font-semibold text-gray-900">{dictionary.Ph5}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.Name}
            className="flex flex-col border border-black p-6 gap-4 portfolio-project"
          >
            {/* Nazwa + ikony */}
            <div className="flex flex-row items-center gap-3 text-[#121212] text-xl font-semibold">
              <span>{project.Name}</span>

              {project.GitHubUrl && (
                <Image
                  src="/assets/images/github-mark-white.svg"
                  alt="GitHub"
                  width={22}
                  height={22}
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => window.open(project.GitHubUrl, "_blank")}
                />
              )}

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
              {dictionary[project.Description] || project.Description}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
