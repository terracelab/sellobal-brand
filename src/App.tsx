import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceIntro } from "./components/ServiceIntro";
import { Features } from "./components/Features";
import { Process } from "./components/Process";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServiceIntro />
        <Features />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}