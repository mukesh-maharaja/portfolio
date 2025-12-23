import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <span className="role">Software Developer</span>

          <h1>
            Hello I’m <br />
            <span className="accent">Mukesh Maharaja</span>
          </h1>

          <p className="hero-desc">
            I build scalable, user-focused web applications with clean interfaces and reliable backend systems.
          </p>

          {/* ACTIONS */}
          <div className="hero-actions">
            <a
              href="/Mukesh-Resume-2024.pdf"
              download
              className="btn btn-primary"
            >
              <FaDownload /> Download CV
            </a>

            <div className="socials">
              <a href="https://github.com/mukesh-maharaja" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mukeshcse94/" target="_blank">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div>
              <h3>1+</h3>
              <span>Year Experience</span>
            </div>
            <div>
              <h3>8</h3>
              <span>Technologies Mastered</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="image-ring">
            <img src="/port.jpeg" alt="Mukesh" />
          </div>
        </div>

      </div>
    </section>
  );
}