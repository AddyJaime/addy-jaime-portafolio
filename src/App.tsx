import Header from "./Components/Header";
import Hero from "./Components/Hero";
import RotatingABadge from "./Components/RotatingABadge";
import TopActions from "./Components/TopActions";
import Portfolio from "./Components/Portfolio";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <main className="bg-[#12121a] h-screen text-light relative overflow-hidden">
        <Header />
        <TopActions />

        {/* HOME */}
        <section className="pt-20 h-[calc(100vh-5rem)]">
          <div className="h-full w-full mr-auto max-w-[1200px] pr-10 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] items-center gap-12">
            <Hero />
            <div className="flex justify-center lg:justify-end">
              <RotatingABadge />
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <Portfolio />
      </main>
    </BrowserRouter>
  );
}
