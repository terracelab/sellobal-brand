import { Ssgoi } from "@ssgoi/react";
import { scroll } from "@ssgoi/react/view-transitions";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceIntro } from "./components/ServiceIntro";
import { Features } from "./components/Features";
import { Process } from "./components/Process";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const config = {
  defaultTransition: scroll(),
  transitions: [
    {
      from: "/#hero",
      to: "/#service",
      transition: scroll({ direction: "down" }),
      symmetric: true,
    },
    {
      from: "/#service",
      to: "/#features",
      transition: scroll({ direction: "down" }),
      symmetric: true,
    },
    {
      from: "/#features",
      to: "/#process",
      transition: scroll({ direction: "down" }),
      symmetric: true,
    },
    {
      from: "/#process",
      to: "/#benefits",
      transition: scroll({ direction: "down" }),
      symmetric: true,
    },
    {
      from: "/#benefits",
      to: "/#contact",
      transition: scroll({ direction: "down" }),
      symmetric: true,
    },
  ],
};

export default function App() {
  return (
    <Ssgoi config={config}>
      <div
        style={{ position: "relative", minHeight: "100vh" }}
        className="min-h-screen bg-white"
      >
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
    </Ssgoi>
  );
}
