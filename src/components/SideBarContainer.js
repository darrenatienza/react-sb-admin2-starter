import React from "react";

const SideBarContainer = ({ isToggle,children }) => {
  return (
    <>
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
          isToggle ? "toggled" : ""
        }`}
        id="accordionSidebar"
      >
          {children}
      </ul>
    </>
  );
};

export default SideBarContainer;
