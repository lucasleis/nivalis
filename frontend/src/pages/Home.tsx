import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Form from "../components/ContactForm";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  const contentClass = loading ? "opacity-0" : "opacity-100 transition-opacity duration-500";

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      <div className={contentClass}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CTA />
        <Form />
        <Footer />
      </div>
    </>
  );
}
