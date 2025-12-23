import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import { SiExpress, SiMysql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="resume" className="resume">
      <div className="container resume-container">

        {/* LEFT SIDE */}
        <div className="resume-left">
          <h2>Why hire me?</h2>
          <p>
            I build clean, scalable and user-friendly applications
            using modern web technologies with real-world experience.
          </p>

          <div className="resume-tabs">
            <button
              className={`tab ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>

            <button
              className={`tab ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>

            <button
              className={`tab ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>

            <button
              className={`tab ${activeTab === "about" ? "active" : ""}`}
              onClick={() => setActiveTab("about")}
            >
              About me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="resume-right">

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <>
              <h3>My experience</h3>
              <p className="muted">
                Hands-on experience working on production-level applications.
              </p>

              <div className="resume-grid">
                <div className="resume-card">
                  <span className="year">2024 – 2025</span>
                  <h4>Software Developer</h4>
                  <p>Magiva Technologies</p>
                </div>

              </div>
            </>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <>
              <h3>My education</h3>
              <p className="muted">
                Academic background that supports my development skills.
              </p>

              <div className="resume-grid">

                <div className="resume-card">
                  <span className="year">2024</span>
                  <h4>Java Full Stack Course</h4>
                  <p>Pumo Technoviation</p>
                </div>

                <div className="resume-card">
                  <span className="year">2020 – 2024</span>
                  <h4>B.E Computer Science</h4>
                  <p>Nandha College of Technology</p>
                </div>

              </div>
            </>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <>
              <h3>My skills</h3>
              <p className="muted">
                Technologies I use to build modern web applications.
              </p>

              <div className="skills-grid">
                <div className="skill"><FaHtml5 /></div>
                <div className="skill"><FaCss3Alt /></div>
                <div className="skill"><FaJs /></div>
                <div className="skill"><FaReact /></div>
                <div className="skill"><FaNodeJs /></div>
                <div className="skill"><SiExpress /></div>
                <div className="skill"><FaDatabase /></div>
                <div className="skill"><FaGitAlt /><FaGithub /></div>
              </div>

            </>
          )}

          {/* ABOUT */}
          {activeTab === "about" && (
            <>
              <h3>About me</h3>
              <p className="muted">
                Quick personal details.
              </p>

              <div className="about-grid">
                <div><strong>Name:</strong> Mukesh Maharaja</div>
                <div><strong>Experience:</strong> 1+ Years</div>
                <div><strong>Email:</strong> mukeshcse94@gmail.com</div>
                <div><strong>Location:</strong> Tamil Nadu, India</div>
                <div><strong>Availability:</strong> Open to work</div>
                <div><strong>Languages:</strong> English, Tamil</div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
