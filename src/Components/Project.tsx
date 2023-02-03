import React, { useEffect } from "react";
import { Project } from "./Projects";

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return (
    <div
      className="project"
      style={{ borderColor: project.color }}>
      <div className="project-header">
        <img
          src={project.image}
          alt={project.name}
        />
        <h3>{project.name}</h3>
      </div>
      <p>{project.description}</p>
      <div className="link">
        <a
          href={project.link}
          target="_blank">
          Check it out!
        </a>
      </div>
    </div>
  );
}
