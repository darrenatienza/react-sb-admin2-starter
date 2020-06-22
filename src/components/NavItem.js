import React from 'react'



const NavItem = ({title, isDropdownList,iconType, icon,isVisibleOnSX,badgeAlertCount,show, content, openDropDown, padding, margin}) => {
    return (
        <>
            {/**Nav Item - Search dropdown (Visible only XS) */}
          <li className={`nav-item dropdown no-arrow ${isVisibleOnSX ? "" : "d-sm-none" } ${margin} ${show ? "show" : ""}`}>
                        <a className="nav-link" href=" # " id ="searchDropdown" role="button" aria-haspopup="true" aria-expanded={show ? "true" : "false"} data-toggle= "dropdown" onClick={openDropDown}>
                        {title !== "" ?<span className="mr-2 d-none d-lg-inline text-gray-600 small">{title}</span> : ""}
                            {icon !== "" && iconType === "icon" ?
                            <i className={icon}></i> : 
                                icon !== "" && iconType === "avatar" ?
                                <>
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                                    <img className="img-profile rounded-circle" alt="profile" src={icon} />
                                </>:
                                ""
                             }
                            {badgeAlertCount &&  <span className="badge badge-danger badge-counter">{badgeAlertCount}</span>}
                            
                        </a>
                        {/**<!-- Dropdown - Messages -->*/}
                        <div className={`${isDropdownList? "dropdown-list" : ""} dropdown-menu dropdown-menu-right ${padding} shadow animated--grow-in ${show ?"show" : ""}`} aria-labelledby="searchDropdown">
                            {content}
                        </div>
            </li>  
        </> 
    )
}
NavItem.defaultProps ={
    isVisibleOnSX: true,
    iconType : "icon",
    margin: "",
    padding: ""
}

export default NavItem
