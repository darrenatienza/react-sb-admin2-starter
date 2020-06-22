import React, {useState} from "react";
import { SideBarItem } from "./SideBarItem";
import { SideBarCollapseItem } from "./SideBarCollapseItem";
import { SideBarCollapseItem2 } from "./SideBarCollapseItem2";
import { useSideBarEntity } from "../entities"


const SideBar = ({onToggleClick, toggle}) => {
const [sideBarEntity,{setToggled}] = useSideBarEntity();
const open= () =>{
  // add class to body tag
  document.body.classList.add('sidebar-toggled')
  setToggled(!sideBarEntity.toggled)
}
  return (
    <>
    {/* <!-- Sidebar --> */}
    <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${toggle ? "toggled" : ""}`}  id="accordionSidebar">

      {/* Sidebar - Brand --> */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      
      {/*<!-- Divider --> */}
      <hr className="sidebar-divider my-0" />
      <SideBarItem title = "Dashboard" icon= "fas fa-fw fa-tachometer-alt" />
      {/*<!-- Divider --> */}
      <hr className="sidebar-divider" />
      {/*<!-- Heading -->*/}
      <div className="sidebar-heading">
        Interface
      </div>
      <SideBarCollapseItem id = {0} title = 'Components' header= 'Custom Components:' icon = "fas fa-fw fa-cog" items={['Buttons','Cards']}/>
      <SideBarCollapseItem id = {1} title = 'Utilities' header='Custom Utilities:' icon = "fas fa-fw fa-wrench" items={['Colors','Borders','Animations', 'Other']}/>
      {/*<!-- Divider --> */}
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">
        Add Ons
      </div>
      <SideBarCollapseItem2 id = {3} title = 'Pages' header='Login Screens:' icon = "fas fa-fw fa-folder" items={[{header:'Login Screens:',collapseItems:['Login','Register']},{header:'Other Pages',collapseItems:['404 Page','Blank Page']}]}/>
      <SideBarItem title = "Chart" icon= "fas fa-fw fa-chart-area" />
      <SideBarItem title = "Table" icon= "fas fa-fw fa-table" />
      {/*<!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" onClick={onToggleClick} id="sidebarToggle"></button>
      </div>
    </ul>
    {/*<!-- End of Sidebar --> */}
    </>
  );
};
export default SideBar;