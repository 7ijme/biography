import React from "react";
import { Data } from "./Container";
import Project from "./Project";

export type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
};

type Props = {
  data: Data | null;
};

export default function Projects({ data }: Props) {
  return (
    <section
      className="projects waves"
      id="projects">
      <h2>Projects</h2>
      <ul>
        {data?.projects.map((project) => (
          <Project project={project} />
        ))}
      </ul>
    </section>
  );
}
