import { ProjectCard, type Project } from "./ProjectCard";
import talk2meVideo from "/src/images/talk2me.mov";

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
    description: "Real-time chat:  Socket.IO + JWT + Postgres.",
    video: talk2meVideo,
    image: "/src/images/talk2me-login-photo.png",
    tags: ["React Native", "Socket.IO", "JWT", "Postgres"],
    code: "https://github.com/tuuser/talk2me",
  },
];

export default function Portfolio() {
  return (
    <section className="pt-20 scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.code ?? p.live ?? p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
