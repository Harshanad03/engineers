import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CattleFeedMachiners from './components/CattleFeedMachiners';
import PoultryFeedMachiners from './components/PoultryFeedMachiners';
import Conveyers from './components/Conveyers';
import SpecialPurposeMachiners from './components/SpecialPurposeMachiners';
import ServicesAndSpares from './components/ServicesAndSpares';
import OurClientsAdoreOurWork from './components/OurClientsAdoreOurWork';
import WhyChooseUsPage from './components/WhyChooseUsPage';
import Loader from './components/Loader';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Use setTimeout to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Categories />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <ContactForm />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cattle-feed-machiners" element={<CattleFeedMachiners />} />
            <Route path="/poultry-feed-machiners" element={<PoultryFeedMachiners />} />
            <Route path="/conveyers" element={<Conveyers />} />
            <Route path="/special-purpose-machiners" element={<SpecialPurposeMachiners />} />
            <Route path="/services-and-spares" element={<ServicesAndSpares />} />
            <Route path="/our-clients-adore-our-work" element={<OurClientsAdoreOurWork />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
