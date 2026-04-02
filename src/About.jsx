import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    'Specialized in MERN stack application development',
    'Builds responsive UIs with React and Tailwind CSS',
    'Develops secure REST APIs with Node.js and Express',
    'Designs scalable MongoDB schemas and backend workflows',
    'Focused on clean code, reusable components, and maintainable architecture',
  ];

  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">About</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-100">MERN Stack Developer focused on reliable product delivery.</h2>
          <p className="mt-6 text-slate-300 leading-relaxed">
            I am Manish Das, a developer who enjoys turning ideas into complete web products. From interactive frontend interfaces to backend API architecture, I deliver end-to-end solutions with the MERN stack.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            My approach combines problem solving, performance optimization, and practical engineering decisions so products are fast, user-friendly, and easy to scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-700/80 bg-slate-900/50 p-6 backdrop-blur"
        >
          <h3 className="text-lg font-semibold text-slate-100">What I Bring</h3>
          <ul className="mt-5 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
