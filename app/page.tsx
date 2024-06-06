import { About } from "./components/About";
import { Favourites } from "./components/Favourites";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MiddleSection } from "./components/MiddleSection";

export default function Home() {
  return (
    <div className="max-7xl mx-auto w-full px-4 md:px-8">
      <Hero />
      <MiddleSection />
      <About />
      <Favourites />
    </div>
  );
}
