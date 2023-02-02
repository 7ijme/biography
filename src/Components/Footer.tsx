import React from "react";
import Contact from "./Contact";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <Contact />
      <code>
        Created with vite + React + TypeScript <br />
        <a
          href="https://github.com/7ijme/biography"
          target="_blank">
          Source
        </a>
        {" • "}
        By Tijme
      </code>
    </footer>
  );
}
