export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#12121a] backdrop-blur">
      <div className="mx-auto max-w-[1200px] px-6 h-24 ml-4 mt-[30px] flex items-center">
        {/* Logo A */}
        <a
          href="#home"
          className="inline-flex h-12 w-12 md:w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl md:text-3xl font-extrabold text-accent hover:bg-white/10"
          aria-label="Go to home"
          title="Home"
        >
          A
        </a>
      </div>
    </header>
  );
}
