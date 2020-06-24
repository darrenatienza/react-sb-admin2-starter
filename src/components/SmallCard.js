import React from "react";

const SmallCard = ({ title, icon, value, colorTheme, children }) => {
  return (
    <div className={`card border-left-${colorTheme} shadow h-100 py-2`}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className={`text-xs font-weight-bold text-${colorTheme} text-uppercase mb-1`}>
              {title}
            </div>
            <div className="row no-gutters align-items-center">
              <div className="col-auto">
                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                  {value}
                </div>
              </div>
              {children}
            </div>
          </div>
          <div className="col-auto">
            <i className={`${icon} text-gray-300`}></i>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SmallCard;
