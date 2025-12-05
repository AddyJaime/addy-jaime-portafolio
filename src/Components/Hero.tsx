import { Link } from "react-router-dom";

export default function Hero() {
  return (
     <section className="h-[85vh] scroll-mt-24 flex items-center">
      <div className="w-full max-w-4xl mt-[-40px] md:px-10 lg:pl-24 xl:pl-32 text-left">
        
        {/* Line 1: Presentation */}
        <p className="text-base md:text-lg text-light tracking-[0.32em] uppercase mb-3">
          Hello, I&apos;m
        </p>

        {/* Line 2: Name */}
        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-light leading-[1.1]">
          Addy<span className="text-accent px-3">Jaime</span>
        </h1>

        {/* Line 3: Profession */}
        <p className="mt-6 text-xl md:text-2xl text-light max-w-3xl leading-relaxed">
          a software engineer with 3+ years of experience. I’m passionate about
          technology and everything we can create with it — always chasing
          innovation like it’s a never-ending game.
        </p>

        {/* Line 4: Buttons */}
        <div className="mt-12 flex flex-wrap gap-5 justify-start">
          <Link
            to="/portfolio"
            className="px-7 py-3.5 rounded-xl bg-accent text-light font-semibold hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            See my work
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-xl bg-light text-black font-semibold hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
