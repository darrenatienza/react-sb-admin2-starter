import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { useSideBarEntity } from "../entities";

export const SideBarCollapseItem = ({
  items,
  id,
  icon,
  title,
  header,
  activeItemID,
  click,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMenuSelected, setMenuSelected] = useState(false);

  // highligh Item label when menu inside selected
  const menuSelected = (index) => {
    setMenuSelected(true);
    setSelectedIndex(index);
  };

  const collapseItems = items.map((name, index) => (
    // when index are same, set element as active
    <a
      key={index}
      className={`collapse-item ${index === selectedIndex ? "active" : ""}`}
      href=" # "
      onClick={() => menuSelected(index)}
    >
      {name}
    </a>
  ));

  return (
    <>
      {/*<!-- Nav Item - Pages Collapse Menu -->*/}
      <li
        className={`nav-item ${
          // highlight label
          isMenuSelected && id === activeItemID ? "active" : ""
        }`}
      >
        <a
          className={`nav-link ${
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
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">{header}</h6>
              {collapseItems}
            </div>
          </div>
        </Collapse>
      </li>
    </>
  );
};
