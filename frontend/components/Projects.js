import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Full Stack Project – YPlay Video Stream",
      desc:
        "A full-stack video streaming platform with user authentication, video upload, real-time updates, and role-based access. Built with a scalable backend and responsive frontend.",
      stack:
        "React.js, Ant Design, Node.js, Express.js, PostgreSQL, Sequelize ORM",
      image: "/project-thumb.png",
      github: "https://github.com/mukesh-maharaja/yplay-video-stream",
      live: "#"
    },
    {
      id: "02",
      title: "Portfolio Website",
      desc:
        "A personal portfolio website showcasing projects, skills, and experience with a modern UI and responsive design.",
      stack: "React.js, Node.js, Express.js, JavaScript, CSS3",
      image: "/portfolio-thumb.png",
      github: "https://github.com/mukesh-maharaja/portfolio",
      live: "#"
    }
  ];

  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prevProject = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">

        <div className="project-row">

          {/* LEFT */}
          <div className="project-left">
            <span className="project-index">{project.id}</span>

            <h2>{project.title}</h2>
            <p>{project.desc}</p>

            <div className="project-stack">{project.stack}</div>

            <div className="project-icons">
              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-right">
            <img src={project.image} alt={project.title} />

            {/* PAGINATION BELOW IMAGE */}
            <div className="project-pagination">
              <button onClick={prevProject} aria-label="Previous project">
                <FaChevronLeft />
              </button>
              <button onClick={nextProject} aria-label="Next project">
                <FaChevronRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
