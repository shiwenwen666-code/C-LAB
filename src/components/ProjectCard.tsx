import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppSettings } from "../App";
import type { Project } from "../types";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const { locale } = useAppSettings();

  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.24, ease: "easeOut" }}>
      <Link to={`/work/${project.slug}`} className={`group block ${large ? "h-full" : ""}`}>
        <div className={`project-card ${large ? "min-h-[520px]" : "min-h-[300px]"}`}>
          <div
            className="absolute inset-0 scale-100 transition-transform duration-500 ease-smooth group-hover:scale-[1.035]"
            style={{ background: project.cover }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-white/10" />
          <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-7">
            <div className="flex items-start justify-between gap-4 font-mono text-xs uppercase tracking-[0.18em] text-white/70">
              <span>{project.year}</span>
              <span>{project.category[locale]}</span>
            </div>
            <div>
              <h3 className={`${large ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"} font-semibold leading-none text-white`}>
                {project.title[locale]}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/72 md:text-base">{project.summary[locale]}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
