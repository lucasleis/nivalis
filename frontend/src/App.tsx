import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />    {/* ← nuevo */}
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
