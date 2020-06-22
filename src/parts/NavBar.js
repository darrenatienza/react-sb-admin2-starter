import React, { useState, useEffect } from "react";
import { useNavBarEntity } from "../entities";
import { ActionInput, NavList } from "../components";

const NavBar = ({ onToggleClick }) => {
  const [navBarEntity, { closeAllPopups }] = useNavBarEntity();
  const [search, setSearch] = useState("");

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
            onClick = {() => closeAllPopups()}
            name="Search"
            placeholder="Search For.."
            type="text"
            className="form-control bg-light border-0 small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <NavList />
      </nav>
    </>
  );
};

export default NavBar;
