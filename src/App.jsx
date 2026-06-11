import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Homme from "./components/Homme";
import Ritual from "./components/Ritual";
import Services from "./components/Services";
import WeightCalculator from "./components/WeightCalculator";
import Boutique from "./components/Boutique";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import "./app.css";

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Homme />
        <Ritual />
        <Services />
        <WeightCalculator />
        <Boutique />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
