import React from "react";

const SideBarBrand = ({title}) => {
  return (
    <>
      {/* Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
         {title}
        </div>
      </a>
    </>
  );
};

export default SideBarBrand;
