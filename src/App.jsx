<<<<<<< HEAD
import React from "react";
import "./App.css";
//import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Form from "./components/Form.jsx";
import TikTokEmbed from "./components/TikTokEmbed.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Form />
      <TikTokEmbed />
      <Footer />
    </div>
  );
}

=======
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Form from "./components/Form";
import TikTokEmbed from "./components/TikTokEmbed";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Form />
      <TikTokEmbed />
      <Footer />
    </>
  );
}

>>>>>>> c8e450bd4967495fbaaed70b577868122285bbb3
export default App;