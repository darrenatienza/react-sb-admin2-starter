import React, { useState } from "react";
import { SideBarItem } from "./SideBarItem";
import { SideBarCollapseItem } from "./SideBarCollapseItem";
import { SideBarCollapseItem2 } from "./SideBarCollapseItem2";

const SideBar = ({ onToggleClick, toggle }) => {
  const [currentActiveID, setCurrentActiveID] = useState(-1);

  const onItemClick = (id) => {
    if (id === currentActiveID) {
      setCurrentActiveID(-1);
    } else {
      setCurrentActiveID(id);
    }
  };

  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
          toggle ? "toggled" : ""
        }`}
        id="accordionSidebar"
      >
        {/* Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/*<!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        <SideBarItem title="Dashboard" icon="fas fa-fw fa-tachometer-alt" />

        {/*<!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Interface</div>

        <SideBarCollapseItem
          id={0}
          activeItemID={currentActiveID}
          click={() => onItemClick(0)}
          title="Components"
          header="Custom Components:"
          icon="fas fa-fw fa-cog"
          items={["Buttons", "Cards"]}
        />

        <SideBarCollapseItem
          id={1}
          activeItemID={currentActiveID}
          click={() => onItemClick(1)}
          title="Utilities"
          header="Custom Utilities:"
          icon="fas fa-fw fa-wrench"
          items={["Colors", "Borders", "Animations", "Other"]}
        />

        {/*<!-- Divider --> */}
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Add Ons</div>

        <SideBarCollapseItem2
          id={3}
          activeItemID={currentActiveID}
          click={() => onItemClick(3)}
          title="Pages"
          header="Login Screens:"
          icon="fas fa-fw fa-folder"
          items={[
            { header: "Login Screens:", collapseItems: [{id:0, desc:"Login"}, {id:1, desc:"Register"}] },
            {
              header: "Other Pages",
              collapseItems: [{id: 2,desc: "404 Page"}, {id:3, desc:"Blank Page"}],
            },
          ]}
        />

        <SideBarItem title="Chart" icon="fas fa-fw fa-chart-area" />

        <SideBarItem title="Table" icon="fas fa-fw fa-table" />

        {/*<!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            onClick={onToggleClick}
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
      {/*<!-- End of Sidebar --> */}
    </>
  );
};
export default SideBar;
