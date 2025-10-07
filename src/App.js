import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CattleFeedMachiners from './components/CattleFeedMachiners';
import PoultryFeedMachiners from './components/PoultryFeedMachiners';
import Conveyers from './components/Conveyers';
import SpecialPurposeMachiners from './components/SpecialPurposeMachiners';
import Automation from './components/Automation';
import ServicesAndSpares from './components/ServicesAndSpares';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Categories />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </>
  );
}

function App() {
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
            <Route path="/automation" element={<Automation />} />
            <Route path="/services-and-spares" element={<ServicesAndSpares />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
