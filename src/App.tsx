import Header from "./Components/Header";
import Hero from "./Components/Hero";
import RotatingABadge from "./Components/RotatingABadge";
import SocialsPopover from "./Components/SocialsPopover";

function App() {
  return (
    <main className="bg-[#12121a] min-h-screen text-light relative">
      <Header />
      <SocialsPopover />
      <section className="mx-auto max-w-[1200px] pt-1 -ml-20 flex items-center justify-start  gap-15">
        <Hero />
        <RotatingABadge />
      </section>
    </main>
  );
}
export default App;
