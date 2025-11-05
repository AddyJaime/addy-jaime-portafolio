import Hero from "../Components/Hero";
import RotatingABadge from "../Components/RotatingABadge";

export default function HomePage() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] items-center gap-12 mr-auto max-w-[1200px] pr-10">
      <Hero />
      <div className="flex justify-center lg:justify-end">
        <RotatingABadge />
      </div>
    </div>
  );
}
