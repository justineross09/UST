import React from "react";

const Box = ({ children, className = "", bordered = false }) => {
  let boxClassName = `${className} bg-primary-500 py-10 px-12 rounded-md` + (bordered ? "border border-secondary-600" : "");
  
  return (
    <div
      className={boxClassName}
    >
      {children}
    </div>
  );
};

export default Box;
