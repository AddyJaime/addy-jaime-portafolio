import Hero from "./Components/Hero";
import RotatingABadge from "./Components/RotatingABadge";

function App() {
  return (
    <main className="bg-black min-h-screen text-light flex items-center justify-start">
      <Hero />
      <RotatingABadge />
    </main>
  );
}

export default App;
