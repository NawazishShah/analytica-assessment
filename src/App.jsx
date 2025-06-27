import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Features />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
