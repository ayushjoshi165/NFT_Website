import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div key={title} className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </button>

      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
