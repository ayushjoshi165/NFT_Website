import React from "react";
import AccordianUti from "./AccordianUti";
import { data } from "./utils/utilitiesData";
export default function Utilities() {
  return (
    <div className="roadmap-container">
      <div>
        <div className="accordion ">
          {data.map(({ title, content }) => (
            <AccordianUti title={title} content={content} key={title} />
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
