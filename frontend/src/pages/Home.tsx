import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import TestimonialsSection from "../components/TestimonialsSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Form from "../components/ContactForm";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo || loading) return;
    const el = document.querySelector(scrollTo);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [loading, location.state]);

  const contentClass = loading ? "opacity-0" : "opacity-100 transition-opacity duration-500";

  return (
    <>
      <Helmet>
        <title>Desarrollo Web y Diseño UI/UX en Argentina | Nivalis</title>
        <meta name="description" content="Creamos sitios web, apps y automatizaciones digitales para hacer crecer tu negocio en Argentina. Agendá una reunión hoy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivalistechlab.com/" />
        <meta property="og:title" content="Desarrollo Web y Diseño UI/UX en Argentina | Nivalis" />
        <meta property="og:description" content="Creamos sitios web, apps y automatizaciones digitales para hacer crecer tu negocio en Argentina. Agendá una reunión hoy." />
        <meta property="og:image" content="https://nivalistechlab.com/og-image.png" />
      </Helmet>
      <Loader onComplete={handleLoaderComplete} />
      <div className={contentClass}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <TestimonialsSection />
        <CTA />
        <Form />
        <Footer />
      </div>
    </>
  );
}
