import React from 'react'

const SideBarMenuItem = ({id, name,activeItemID,onClick}) => {
    return (
        <>
           <a
         
            className={`collapse-item ${id === activeItemID ? "active" : ""}`}
            href=" # "
            onClick={onClick}
          >
            {name}
          </a>  
        </>
    )
}

export default SideBarMenuItem
