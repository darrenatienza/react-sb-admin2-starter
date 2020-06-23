import React from "react";

const UiDropDown = ({show}) => {
  return (
    <div
      className={`dropdown-menu dropdown-menu-right shadow animated--fade-in ${show ? "show" : ""}`}
      aria-labelledby="dropdownMenuLink"
    >
      <div className="dropdown-header">Dropdown Header:</div>
      <a className="dropdown-item" href=" #">
        Action
      </a>
      <a className="dropdown-item" href=" #">
        Another action
      </a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href=" #">
        Something else here
      </a>
    </div>
  );
};

export default UiDropDown;
