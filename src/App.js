import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCog, faWrench, faAddressBook, faFolder } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import {SideBar, NavBar} from './parts';


library.add(fab, faCheckSquare, faCoffee, faCog, faWrench, faAddressBook, faFolder)

const App = () => {
  const [isToggled, setSideBarToggled] = useState(false);

  const toggleSideBar = () => {
    if(!isToggled){
      document.body.classList.add('sidebar-toggled');
    }else{
      document.body.classList.remove('sidebar-toggled');
    }
    setSideBarToggled(!isToggled);
  }
  return (
    <div id="wrapper">
      <SideBar onToggleClick = {() => toggleSideBar()}  toggle = {isToggled}/>
      {/** Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/** Main Content */}
        <div id ="content">
          <NavBar onToggleClick = { () => toggleSideBar() } toggle = {isToggled} />
        </div>
      </div>
      
    </div>
  );
}
export default App;
