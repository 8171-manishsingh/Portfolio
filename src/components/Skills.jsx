import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Database & Tooling',
    items: ['MongoDB', 'Mongoose', 'Git & GitHub', 'Vite'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-100">Tech I use to ship products end to end.</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-slate-300">{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
