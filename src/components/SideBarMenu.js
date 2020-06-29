import React from 'react'
const SideBarItem = ({title,icon}) => {
    return (
        <div >
            {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item" style={{marginBottom: 0, marginTop:0}}>
                <a className="nav-link" href="index.html">
                <i className={icon}></i>
                <span>{title}</span></a>
            </li>
        </div>
    )
}
export default SideBarItem;