import SocialsPopover from "./SocialsPopover";
import PortfolioLink from "./PortfolioLink";

export default function TopActions() {
  return (
    <div className="fixed top-12 left-24 z-50 flex items-center gap-3">
      <SocialsPopover />
      <PortfolioLink />
    </div>
  );
}
