import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faCog,
  faWrench,
  faAddressBook,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
import { SideBar, NavBar } from "./parts";
import { DashboardContent } from "./pages";
import { useNavBarEntity } from "./entities";
import { PageHeader } from "./parts";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faCog,
  faWrench,
  faAddressBook,
  faFolder
);

const App = () => {
  const [navbarEntity, { closeAllPopups }] = useNavBarEntity();
  const [isToggled, setSideBarToggled] = useState(false);


  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    
    const position = window.pageYOffset;
    setSrollPosition(position);
   
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log(scrollPosition);
    document.getElementsByClassName("scroll-to-top").fadeIn();
    return () => {
      
    }
  }, [scrollPosition])
  const toggleSideBar = () => {
    document.body.classList.toggle("sidebar-toggled");
    setSideBarToggled(!isToggled);
  };
  return (
    <div id="wrapper">
     
      <SideBar onToggleClick={() => toggleSideBar()} toggle={isToggled} />
      
      {/** Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/** Main Content */}
        <div id="content">
          <NavBar onToggleClick={() => toggleSideBar()} toggle={isToggled} />
          <DashboardContent title="Dashboard" />
        </div>
      </div>
      {/** <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      
    </div>
  );
};
export default App;
