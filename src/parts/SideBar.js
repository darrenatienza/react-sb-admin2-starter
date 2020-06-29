import React, { useState } from "react";
import {
  SideBarMenu,
  SideBarCollapseItem,
  SideBarCollapseItem2,
  SideBarToggleMenu,
  SideBarToggleMenuItem,
  SideBarToggleMenuItemHeader,
} from "../components";
import SideBarContainer from "../components/SideBarContainer";
import SideBarBrand from "../components/SideBarBrand";

const SideBar = ({ onToggleClick, toggle }) => {
  // use for toggling
  const [currentMenuActiveID, setCurrentMenuActiveID] = useState(-1);
  //use for highlight menu item
  const [currentMenuItemActiveID, setCurrentMenuItemActiveID] = useState(-1);
  // use for highlight menu title
  const [currentParentMenuActiveID, setCurrentParentMenuActiveID] = useState(
    -1
  );

  /**
   * Handle clicks of side bar menu.
   * Collapse all menu if current menu id is -1.
   * Show single menu item at a time
   * @param {number} id 
   */
  const onMenuClick = (id) => {
    // remove highlight on All Menu
    setCurrentParentMenuActiveID(-1);
    // remove highlight on All Menu Item
    setCurrentMenuItemActiveID(-1);
    // collapse | unCollapse active item
    if (id === currentMenuActiveID) {
      setCurrentMenuActiveID(-1);
    } else {
      setCurrentMenuActiveID(id);
    }
  };
  /**
   * Handle clicks of side bar menu item.
   * Highlight selected menu item.
   * @param {number} id 
   */
  const onMenuItemClick = (id) => {
    setCurrentMenuItemActiveID(id);
    // this time we know that the current menu is active, highlight the current menu
    setCurrentParentMenuActiveID(currentMenuActiveID);
  };

  return (
    <>
      {/* <!-- Sidebar --> */}
      <SideBarContainer isToggle={toggle}>
        <SideBarBrand
          title={
            <>
              SB Admin <sup>2</sup>
            </>
          }
        />

        {/*<!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        <SideBarMenu title="Dashboard" icon="fas fa-fw fa-tachometer-alt" />

        {/*<!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Interface</div>

        {/** Menus */}
        <SideBarToggleMenu
          id={0}
          activeParentMenuID={currentParentMenuActiveID}
          activeItemID={currentMenuActiveID}
          click={() => onMenuClick(0)}
          title="Components"
          header="Custom Components:"
          icon="fas fa-fw fa-cog"
        >
          <SideBarToggleMenuItemHeader name="Dashboard" />

          <SideBarToggleMenuItem
            id={0}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(0)}
            name="Buttons"
          />
          <SideBarToggleMenuItem
            id={1}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(1)}
            name="Card"
          />
        </SideBarToggleMenu>

        {/** Menus */}
        <SideBarToggleMenu
          id={1}
          activeParentMenuID={currentParentMenuActiveID}
          activeItemID={currentMenuActiveID}
          click={() => onMenuClick(1)}
          title="Utilities"
          header="Custom Utilities:"
          icon="fas fa-fw fa-wrench"
        >
          <SideBarToggleMenuItemHeader name="Custom Utilities:" />

          <SideBarToggleMenuItem
            id={2}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(2)}
            name="Colors"
          />
          <SideBarToggleMenuItem
            id={3}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(3)}
            name="Borders"
          />
          <SideBarToggleMenuItem
            id={4}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(4)}
            name="Animation"
          />
          <SideBarToggleMenuItem
            id={5}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(5)}
            name="Other"
          />
        </SideBarToggleMenu>

        {/*<!-- Divider --> */}
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Add Ons</div>

        {/** Menus */}
        <SideBarToggleMenu
          id={2}
          activeParentMenuID={currentParentMenuActiveID}
          activeItemID={currentMenuActiveID}
          click={() => onMenuClick(2)}
          title="Pages"
          icon="fas fa-fw fa-folder"
          items={["Buttons", "Cards"]}
        >
          <SideBarToggleMenuItemHeader name="Login Screens:" />

          <SideBarToggleMenuItem
            id={7}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(7)}
            name="Login"
          />
          <SideBarToggleMenuItem
            id={8}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(8)}
            name="Register"
          />

          <SideBarToggleMenuItemHeader name="Other Pages:" />
          <SideBarToggleMenuItem
            id={9}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(9)}
            name="404 Page"
          />
          <SideBarToggleMenuItem
            id={10}
            activeItemID={currentMenuItemActiveID}
            onClick={() => onMenuItemClick(10)}
            name="Blank Page"
          />
        </SideBarToggleMenu>

        <SideBarMenu title="Chart" icon="fas fa-fw fa-chart-area" />

        <SideBarMenu title="Table" icon="fas fa-fw fa-table" />

        {/*<!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            onClick={onToggleClick}
            id="sidebarToggle"
          ></button>
        </div>
      </SideBarContainer>
      {/*<!-- End of Sidebar --> */}
    </>
  );
};
export default SideBar;
