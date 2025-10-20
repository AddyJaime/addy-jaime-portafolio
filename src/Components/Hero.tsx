export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full max-w-3xl mb-[120px]  md:px-10 lg:pl-24 xl:pl-32 text-left">
        {/* Line 1: Presentation */}
        <p className="text-base md:text-lg text-light tracking-[0.32em] uppercase mb-4">
          Hello, I&apos;m
        </p>

        {/* Line 2: Name */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-light">
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
          <a
            href="#Work"
            className="px-7 py-3.5 rounded-xl bg-accent text-light font-semibold hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            See my work
          </a>
          <a
            href="#Contact"
            className="px-7 py-3.5 rounded-xl bg-light text-black font-semibold hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
