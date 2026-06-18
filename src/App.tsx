import "./App.css";
import Advantages from "./components/advantages/Advantages";
import Contact from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { LanguageProvider } from "./context/Language";

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-root">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Advantages />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
