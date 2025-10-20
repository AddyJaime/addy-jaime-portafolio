import { Briefcase } from "lucide-react";

export default function PortfolioLink() {
  return (
    <a
      href="#portfolio"
      className="inline-flex ml-[75px] mt-[12px] items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-light hover:bg-white/10 transition"
      title="Go to Portfolio"
    >
      <Briefcase className="h-4 w-4 text-accent" />
      Portfolio
    </a>
  );
}
