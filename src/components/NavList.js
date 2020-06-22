import React, { useState } from "react";
import { ActionInput, NavItem } from "./";
import {useNavBarEntity} from "../entities"


const NavList = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  //const [isAlertVisible, setAlertVisible] = useState(false);
  const [isMessagesVisible, setMessagesVisible] = useState(false);
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);
  const [navBarEntity, {setAlertVisible}] = useNavBarEntity();

  const createSearchContent = () => {
    return (
      <form className="form-inline mr-auto w-100 navbar-search">
        <ActionInput
          name="Search"
          placeholder="Search For.."
          type="text"
          className="form-control bg-light border-0 large"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    );
  };

  const createAlertContent = () => {
    return (
      <>
        {/**Nav Item - Alert */}
        <h6 className="dropdown-header">Alert Center</h6>
        <a className="dropdown-item d-flex align-items-center" href=" #">
          <div className="mr-3">
            <div className="icon-circle bg-primary">
              <i className="fas fa-file-alt text-white"></i>
            </div>
          </div>
          <div>
            <div className="small text-gray-500">December 12, 2019</div>
            <span className="font-weight-bold">
              A new monthly report is ready to download!
            </span>
          </div>
        </a>
        <a className="dropdown-item d-flex align-items-center" href=" #">
          <div className="mr-3">
            <div className="icon-circle bg-success">
              <i className="fas fa-donate text-white"></i>
            </div>
          </div>
          <div>
            <div className="small text-gray-500">December 7, 2019</div>
            <span className="font-weight-bold">
              $290.29 has been deposited into your account!
            </span>
          </div>
        </a>
      </>
    );
  };

  const createMessagesContent = () => {
    return (
      <>
        <h6 className="dropdown-header">Message Center</h6>
        <a className="dropdown-item d-flex align-items-center" href=" #">
          <div className="dropdown-list-image mr-3">
            <img
              className="rounded-circle"
              src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
              alt=""
            />
            <div className="status-indicator bg-success"></div>
          </div>
          <div className="font-weight-bold">
            <div className="text-truncate">
              Hi there! I am wondering if you can help me with a problem I've
              been having.
            </div>
            <div className="small text-gray-500">Emily Fowler · 58m</div>
          </div>
        </a>

        <a className="dropdown-item d-flex align-items-center" href=" #">
          <div className="dropdown-list-image mr-3">
            <img
              className="rounded-circle"
              src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
              alt=""
            />
            <div className="status-indicator"></div>
          </div>
          <div>
            <div className="text-truncate">
              I have the photos that you ordered last month, how would you like
              them sent to you?
            </div>
            <div className="small text-gray-500">Jae Chun · 1d</div>
          </div>
        </a>

        <a className="dropdown-item d-flex align-items-center" href=" #">
          <div className="dropdown-list-image mr-3">
            <img
              className="rounded-circle"
              src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
              alt=""
            />
            <div className="status-indicator bg-warning"></div>
          </div>
          <div>
            <div className="text-truncate">
              Last month's report looks great, I am very happy with the progress
              so far, keep up the good work!
            </div>
            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
          </div>
        </a>

        <a className="dropdown-item d-flex align-items-center" href=" #">
          <div className="dropdown-list-image mr-3">
            <img
              className="rounded-circle"
              src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
              alt=""
            />
            <div className="status-indicator bg-success"></div>
          </div>
          <div>
            <div className="text-truncate">
              Am I a good boy? The reason I ask is because someone told me that
              people say this to all dogs, even if they aren't good...
            </div>
            <div className="small text-gray-500">Chicken the Dog · 2w</div>
          </div>
        </a>

        <a className="dropdown-item text-center small text-gray-500" href=" #">
          Read More Messages
        </a>
      </>
    );
  };
  const createUserMenu = () => {
    return (
      <>
        <a className="dropdown-item" href=" #">
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
          Profile
        </a>
        <a className="dropdown-item" href=" #">
          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
          Settings
        </a>
        <a className="dropdown-item" href=" #">
          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
          Activity Log
        </a>
        <div className="dropdown-divider"></div>
        <a
          className="dropdown-item"
          href=" #"
          data-toggle="modal"
          data-target="#logoutModal"
        >
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </a>
      </>
    );
  };

  const toggleAlert = () => {
    setSearchVisible(false);
    setMessagesVisible(false);
    setUserMenuVisible(false);
    setAlertVisible(!navBarEntity.isAlertVisible);
  };
  const toggleMessages = () => {
    setSearchVisible(false);
    setAlertVisible(false);
    setUserMenuVisible(false);
    setMessagesVisible(!isMessagesVisible);
  };
  const toggleAvatar = () => {
    setSearchVisible(false);
    setAlertVisible(false);
    setMessagesVisible(false);
    setUserMenuVisible(!isUserMenuVisible);
  };
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    setAlertVisible(false);
    setMessagesVisible(false);
    setUserMenuVisible(false);
  }

  return (
    <>
      {/** Top Bar Nav Bar */}
      <ul className="navbar-nav ml-auto">
        <NavItem
          icon="fas fa-search fa-fw"
          isVisibleOnSX={false}
          padding="p-3"
          content={createSearchContent()}
          show={isSearchVisible}
          openDropDown={() =>toggleSearch()}
        />

        <NavItem
          isDropdownList={true}
          badgeAlertCount={3}
          margin="mx-1"
          icon="fas fa-bell fa-fw"
          content={createAlertContent()}
          show={navBarEntity.isAlertVisible}
          openDropDown={() => toggleAlert()}
        />

        <NavItem
          isDropdownList={true}
          icon="fas fa-envelope fa-fw"
          margin="mx-1"
          badgeAlertCount={50}
          content={createMessagesContent()}
          show={isMessagesVisible}
          openDropDown={() => toggleMessages()}
        />
        <div className="topbar-divider d-none d-sm-block"></div>
        <NavItem
          isDropdownList={false}
          iconType="avatar"
          icon="https://source.unsplash.com/QAB-WJcbgJk/60x60"
          content={createUserMenu()}
          show={isUserMenuVisible}
          openDropDown={() => toggleAvatar()}
        />
      </ul>
    </>
  );
};

export default NavList;
