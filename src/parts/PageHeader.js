import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">{title}</h1>
      {/**Posible list items on anchors */}
      <a
        href=" #"
        className="d-none d-sm-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
      </a>
    </div>
  );
};

export default PageHeader;
