import { Hero } from "./components/Hero";
import { BentoSpecs } from "./components/BentoSpecs";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="bg-zinc-950 min-h-screen selection:bg-amd-red selection:text-white">
      <Hero />
      <BentoSpecs />
      <FeatureShowcase />
      <Footer />
    </main>
  );
}

export default App;
