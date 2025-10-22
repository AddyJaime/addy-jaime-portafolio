import Header from "./Components/Header";
import Hero from "./Components/Hero";
import RotatingABadge from "./Components/RotatingABadge";
import TopActions from "./Components/TopActions";
import Portfolio from "./Components/Portfolio";

export default function App() {
  return (
    <main className="bg-[#12121a] h-screen text-light relative">
      <Header />
      <TopActions />

      <section id="home" className="screen">
        <div className="h-full w-full mr-auto max-w-[1200px] pr-10 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] items-center gap-12">
          <Hero />
          <div className="flex justify-center lg:justify-end">
            <RotatingABadge />
          </div>
        </div>
      </section>

      <section id="portfolio" className="screen">
        <div className="h-full mx-auto max-w-[1200px] px-6 lg:px-10 overflow-hidden">
          <Portfolio />
        </div>
      </section>
    </main>
  );
}
