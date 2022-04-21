import React, { useState } from 'react';

const AccordionUti = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div key={title}  className="accordion-item">
   
    <button  className="accordion-title-uti"  onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </button>
    
     
      {isActive && <div className="accordion-content-uti">{content}</div>}
    </div>
  );
};

export default AccordionUti;