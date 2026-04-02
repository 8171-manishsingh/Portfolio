import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from './assets/hero.jpeg';
import { portfolioConfig } from './data/portfolioData';

const iconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const Hero = () => {
  const line = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300"
          >
            {portfolioConfig.role}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-4xl text-4xl font-black leading-tight text-slate-100 md:text-6xl"
          >
            I am {portfolioConfig.name}, building full stack web products with MERN.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300"
          >
            I specialize in developing scalable web applications using MongoDB, Express.js, React, and Node.js. I focus on clean architecture, API performance, and responsive user experience.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Contact Me
              <Mail size={18} />
            </a>
            <a
              href={portfolioConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 px-6 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
            >
              View Resume
              <Eye size={18} />
            </a>
            <a
              href={portfolioConfig.resumeUrl}
              download="Manish-Das-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={line}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 flex items-center gap-5 text-slate-300"
          >
            {portfolioConfig.socialLinks.map((social) => {
              const Icon = iconByLabel[social.label] ?? Github;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="transition hover:text-cyan-300"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-3 shadow-glow backdrop-blur">
            <img
              src={profileImage}
              alt="Manish Das profile"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
