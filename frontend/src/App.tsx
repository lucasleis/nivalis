import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { ScrollProvider } from "./components/scroll/ScrollProvider";

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Header />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <CTA />
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
