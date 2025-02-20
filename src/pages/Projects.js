import React from "react";

const projects = [
  { title: "Project 1", description: "React + Firebase App", link: "#" },
  { title: "Project 2", description: "AI Chatbot", link: "#" },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
