import React from "react";
import { Collapse } from "react-bootstrap";

const SideBarMenu = ({
    id,
    icon,
    title,
    activeItemID,
    activeParentMenuID,
    click,
    children
  }) => {
    
    return (
      <>
        {/*<!-- Nav Item - Pages Collapse Menu -->*/}
        <li
          className={`nav-item
        ${
          // highlight label only when menu is selected
          id === activeParentMenuID ? "active" : ""
        }`}
        >
          <a
            className={`nav-link 
            ${
              //arrow change
              id === activeItemID ? "" : "collapsed"
            } `}
            href="# "
            data-toggle="collapse"
            aria-expanded="true"
            onClick={click}
          >
            <i className={icon}></i>
            <span>{title}</span>
          </a>
          <Collapse
            in={
              // open / close toggle
              id === activeItemID ? true : false
            }
          >
            <div
              id="collapseTwo"
              className={`collapse`}
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                {/** separate fragment view for better readability  */}
               {children}
              </div>
            </div>
          </Collapse>
        </li>
      </>
    );
  };

export default SideBarMenu;
