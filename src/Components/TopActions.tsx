// TopActions.tsx
import SocialsPopover from "./SocialsPopover";
import PortfolioLink from "./PortfolioLink";

export default function TopActions() {
  return (
    <div className="fixed top-12 left-20 ml-[30px] z-50 flex items-center gap-3">
      <a
        href="#home"
        className="inline-flex h-12 w-12 md:w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl md:text-3xl font-extrabold text-accent hover:bg-white/10"
        aria-label="Go to home"
        title="Home"
      >
        A
      </a>

      <PortfolioLink />
      <SocialsPopover />
    </div>
  );
}
