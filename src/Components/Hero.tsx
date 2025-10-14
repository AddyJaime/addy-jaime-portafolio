export default function Hero() {
  return (
    <section className="flex flex-col items-start justify-center min-h-screen text-center px-6 ">
      {/* Line 1: Presentation */}
      <p className="text-base md:text-lg text-muted tracking-[0.32em] uppercase mb-4 ">
        Hello, I&apos;m
      </p>

      {/* Line 2: Name */}
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-light">
        Addy<span className="text-accent px-3">Jaime</span>
      </h1>

      {/* Line 3: Profession */}
      <p className="mt-6 text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
        a software engineer with 3+ years of experience. I’m passionate about
        technology and everything we can create with it — always chasing
        innovation like it’s a never-ending game.
      </p>

      {/* Line 4: Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-5">
        <a
          href="#Work"
          className="px-7 py-3.5 rounded-xl bg-accent text-black font-semibold hover:opacity-90 hover:scale-105 transition-transform duration-300"
        >
          See my work
        </a>
        <a
          href="#Contact"
          className="px-7 py-3.5 rounded-xl text-black font-semibold bg-light hover:opacity-90 hover:scale-105 transition-transform duration-300"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
