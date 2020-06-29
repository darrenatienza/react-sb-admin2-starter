import React, { useState, useRef, useEffect } from "react";
import { ActionInput, NavItem } from ".";

const NavList = ({onClosePopUps,children}) => {
  const node = useRef();
  // register document events
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // handle click outside event
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    // close all open dropdowns
    onClosePopUps();
  };
  // render views
  return (
    <>
      {/** Top Bar Nav Bar */}
      <ul className="navbar-nav ml-auto"  ref={node}>
        {children}
      </ul>
    </>
  );
};

export default NavList;
