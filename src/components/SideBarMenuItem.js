import React from 'react'

const SideBarMenuItem = ({name,isSelected,onClick}) => {
    return (
        <>
           <a
         
            className={`collapse-item ${isSelected ? "active" : ""}`}
            href=" # "
            onClick={onClick}
          >
            {name}
          </a>  
        </>
    )
}

export default SideBarMenuItem
