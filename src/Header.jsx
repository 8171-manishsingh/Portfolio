import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled ? 'border-b border-slate-800/90 bg-slate-950/85 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-xl font-black tracking-tight text-slate-100">
          Manish Das <span className="text-cyan-300">DevPortfolio</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-slate-100 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-slate-300 transition hover:text-cyan-300"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
