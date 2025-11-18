import { ExternalLink, Github } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  live?: string;
  code?: string;
};

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 transition
 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_10px_40px_-10px_rgba(107,91,255,0.35)]"
    >
      {p.video ? (
        <div className="relative aspect-[16/10] rounded-xl bg-white/5 overflow-hidden max-w-[80%] mx-auto">
          <video
            src={p.video}
            controls
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
            poster={p.image}
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/11" />
        </div>
      ) : p.image ? (
        <div className="relative aspect-[16/10] rounded-xl bg-white/5">
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
        </div>
      ) : (
        <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-white/5 to-white/10" />
      )}

      <div className="mt-4 space-y-3">
        <h3 className="text-xl font-semibold text-light">{p.title}</h3>
        <p className="text-sm text-light/70 leading-relaxed">{p.description}</p>

        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-light/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-xl border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm text-accent hover:bg-accent/20"
              aria-label={`Open live demo of ${p.title}`}
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-light/90 hover:bg-white/10"
              aria-label={`Open source code of ${p.title}`}
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>

      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100"
        style={{ boxShadow: "0 0 40px 8px rgba(107,91,255,0.15)" }}
      />
    </article>
  );
}
