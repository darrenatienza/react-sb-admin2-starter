import React, { useState, useRef, useEffect } from "react";
import { useNavBarEntity } from "../entities";
import { ActionInput, NavMenu, NavItem } from "../components";

const NavBar = ({ onToggleClick }) => {
  const [search, setSearch] = useState("");

  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isMessagesVisible, setMessagesVisible] = useState(false);
  const [isUserMenuVisible, setUserMenuVisible] = useState(false);

  const closeAllPopups = () => {
    // close all open dropdowns
    setSearchVisible(false);
    setMessagesVisible(false);
    setUserMenuVisible(false);
    setAlertVisible(false);
  };

  const createAlertContent = () => {
    return <></>;
  };

  const createMessagesContent = () => {
    return <></>;
  };
  const createUserMenu = () => {
    return <></>;
  };

  // toggle dropdowns
  const toggleAlert = () => {
    setSearchVisible(false);
    setMessagesVisible(false);
    setUserMenuVisible(false);
    setAlertVisible(!isAlertVisible);
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
    console.log("click");
    setSearchVisible(!isSearchVisible);
    setAlertVisible(false);
    setMessagesVisible(false);
    setUserMenuVisible(false);
  };
  return (
    <>
      {/** Top Bar */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/** Side Bar Toggle (Top Bar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={onToggleClick}
        >
          <i className="fa fa-bars"></i>
        </button>

        {/**Top Bar Search */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 margin-0 navbar-search">
          <ActionInput
            onClick={() => closeAllPopups()}
            name="Search"
            placeholder="Search For.."
            type="text"
            className="form-control bg-light border-0 small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <NavMenu onClosePopUps={closeAllPopups}>
          <NavItem
            icon="fas fa-search fa-fw"
            isVisibleOnSX={false}
            padding="p-3"
            show={isSearchVisible}
            openDropDown={() => toggleSearch()}
          >
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
          </NavItem>

          <NavItem
            isDropdownList={true}
            badgeAlertCount={3}
            margin="mx-1"
            icon="fas fa-bell fa-fw"
            show={isAlertVisible}
            openDropDown={() => toggleAlert()}
          >
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
          </NavItem>

          <NavItem
            isDropdownList={true}
            icon="fas fa-envelope fa-fw"
            margin="mx-1"
            badgeAlertCount={50}
            show={isMessagesVisible}
            openDropDown={() => toggleMessages()}
          >
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
                  Hi there! I am wondering if you can help me with a problem
                  I've been having.
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
                  I have the photos that you ordered last month, how would you
                  like them sent to you?
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
                  Last month's report looks great, I am very happy with the
                  progress so far, keep up the good work!
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
                  Am I a good boy? The reason I ask is because someone told me
                  that people say this to all dogs, even if they aren't good...
                </div>
                <div className="small text-gray-500">Chicken the Dog · 2w</div>
              </div>
            </a>

            <a
              className="dropdown-item text-center small text-gray-500"
              href=" #"
            >
              Read More Messages
            </a>
          </NavItem>
          <div className="topbar-divider d-none d-sm-block"></div>
          <NavItem
            isDropdownList={false}
            iconType="avatar"
            icon="https://source.unsplash.com/QAB-WJcbgJk/60x60"
            show={isUserMenuVisible}
            openDropDown={() => toggleAvatar()}
          >
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
          </NavItem>
        </NavMenu>
      </nav>
    </>
  );
};

export default NavBar;
