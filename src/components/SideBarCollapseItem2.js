import React, { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import { useSideBarEntity } from "../entities";

const SideBarCollapseItem2 = ({
  id,
  icon,
  title,
  header,
  items,
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

  // separate only the collapse items
  const collapseItems = items.map(({ header, collapseItems }, index) => (
    <React.Fragment key={index}>
      <h6 className="collapse-header">{header}</h6>

      {collapseItems.map(({ id, desc }, index) => {
        return (
          <a
            key={id}
            className={`collapse-item ${id === selectedIndex ? "active" : ""}`}
            href=" # "
            onClick={() => menuSelected(id)}
          >
            {desc}
          </a>
        );
      })}
    </React.Fragment>
  ));

  return (
    <>
      {/*<!-- Nav Item - Pages Collapse Menu -->*/}
      <li
        className={`nav-item
      ${
        // highlight label only when menu is selected
        isMenuSelected && id === activeItemID ? "active" : ""
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
              {collapseItems}
            </div>
          </div>
        </Collapse>
      </li>
    </>
  );
};
export default SideBarCollapseItem2;