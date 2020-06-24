import React, { useRef, useState, useEffect } from "react";
import UiDropDown from "./UiDropDown";
import { Dropdown } from "react-bootstrap";
import {PropTypes} from "prop-types";
const Card = ({title,colorTheme, dropDownItems,dropDownTitle, children }) => {
  const node = useRef();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
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
    setDropdownVisible(false);
  };
  const handleDropdownClick = (e) =>{
    setDropdownVisible(!isDropdownVisible)
    e.preventDefault();
  }
  return (
    <>
      <div className="card shadow mb-4">
        {/** <!-- Card Header - Dropdown --> */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className={`m-0 font-weight-bold text-${colorTheme}`}>
            {title}
          </h6>
          <div className="dropdown no-arrow" ref={node}>
            <a
              className=""
              href=" # "
              role="button"
              id="dropdownMenuLink"
              onClick={(e) => handleDropdownClick(e)}
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <UiDropDown title={dropDownTitle} items= {dropDownItems} show={isDropdownVisible} />
          </div>
        </div>
        {/** <!-- Card Body --> */}
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};

export default Card;
