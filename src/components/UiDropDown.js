import React from "react";
import Proptypes from "prop-types";

const UiDropDown = ({ title, items, show }) => {
  return (
    <>
      <ul
        className={`dropdown-menu dropdown-menu-right shadow animated--fade-in ${
          show ? "show" : ""
        }`}
        aria-labelledby="dropdownMenuLink"
      >
        <div className="dropdown-header">{title}</div>

        {items.map(({ id, name, url }) => (
          <React.Fragment key= {id}>
            {name !== "" ? (
              <li  className="dropdown-item" >
                <a href={url}>{name}</a>
              </li>
            ) : (
              <li className="dropdown-divider"></li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};
UiDropDown.defaultProps = {
  
  items: [{name:""}],
};
UiDropDown.propTypes = {
  show: Proptypes.bool,
};
export default UiDropDown;
