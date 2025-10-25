// src/Components/Portfolio.tsx
import { ProjectCard, type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Gredy Kent Barbershop",
    description: "Booking app: React + AntD + Express + Mongo.",
    image: "/thumbs/gredy.png",
    tags: ["React", "AntD", "Express", "MongoDB"],
    live: "https://gredykentbarbershop.com",
    code: "https://github.com/tuuser/gredy",
  },
  {
    title: "Talk2Me (Chat)",
    description: "Real-time chat: RN + Socket.IO + JWT + Postgres.",
    image: "/thumbs/talk2me.png",
    tags: ["React Native", "Socket.IO", "JWT", "Postgres"],
    code: "https://github.com/tuuser/talk2me",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-20 scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.code ?? p.live ?? p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
