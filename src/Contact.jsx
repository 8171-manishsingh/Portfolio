import { motion } from 'framer-motion';
import { Download, Eye, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { portfolioConfig } from './data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-100 md:text-4xl">Let us build a strong MERN product together.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            I am {portfolioConfig.name}, a {portfolioConfig.role} open to internships, freelance projects, and collaboration opportunities. I can contribute to frontend, backend, API integration, and complete full stack delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Send size={16} />
              Email Me
            </a>
            <a
              href={portfolioConfig.socialLinks[1].url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={portfolioConfig.socialLinks[0].url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Mail size={16} /> {portfolioConfig.email}
            </a>
            <a
              href="tel:+919128408171"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Phone size={16} /> {portfolioConfig.phone}
            </a>
            <a
              href={portfolioConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 px-5 py-3 text-emerald-300 transition hover:bg-emerald-400/10"
            >
              <Eye size={16} /> View Resume
            </a>
            <a
              href={portfolioConfig.resumeUrl}
              download="Manish-Das-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
