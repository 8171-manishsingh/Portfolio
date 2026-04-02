import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './components/Skills';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Manish Das | MERN Stack Web Developer
      </footer>
    </div>
  );
}

export default App;

