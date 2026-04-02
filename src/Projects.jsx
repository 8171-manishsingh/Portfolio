import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { projectList } from './data/portfolioData';

const PROJECTS_PER_PAGE = 3;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projectList.length / PROJECTS_PER_PAGE);

  const visibleProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return projectList.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [currentPage]);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Projects</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-100">MERN-focused projects that show my end-to-end development skills.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            This section uses pagination so you can keep adding projects over time while keeping the portfolio fast and easy to scan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex h-full flex-col rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
              <p className="mt-3 text-slate-300 leading-relaxed">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-200">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 text-slate-300">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View repository"
                  className="transition hover:text-cyan-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.live && project.live !== '#' ? project.live : project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open live project"
                  className="transition hover:text-cyan-300"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={16} /> Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`h-10 w-10 rounded-full border text-sm font-semibold transition ${
                currentPage === page
                  ? 'border-cyan-300 bg-cyan-400 text-slate-950'
                  : 'border-slate-600 text-slate-200 hover:border-cyan-300 hover:text-cyan-300'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
