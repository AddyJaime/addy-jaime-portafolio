import Header from "./Components/Header";
import TopActions from "./Components/TopActions";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";

export default function App() {
  return (
    <main className="bg-[#12121a] min-h-screen text-light relative overflow-hidden">
      <Header />
      <TopActions />

      <section className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </section>
    </main>
  );
}
