import Header from "./Components/Header";
import Hero from "./Components/Hero";
import RotatingABadge from "./Components/RotatingABadge";
import TopActions from "./Components/TopActions";
import Portfolio from "./Components/Portfolio";

export default function App() {
  return (
    <main className="bg-[#12121a] min-h-screen text-light relative overflow-hidden">
      <Header />

      {/* Socials + Portfolio */}
      <TopActions />

      {/* HOME */}
      <section
        id="home"
        className="mx-auto max-w-[1200px] pt-24 -ml-20 flex items-center justify-start gap-16"
      >
        <Hero />
        <RotatingABadge />
      </section>

      {/* PORTFOLIO */}
      <Portfolio />
    </main>
  );
}
