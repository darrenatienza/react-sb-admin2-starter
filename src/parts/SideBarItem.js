import React from 'react'

export const SideBarItem = (props) => {
    return (
        <div >
            {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item" style={{marginBottom: 0, marginTop:0}}>
                <a className="nav-link" href="index.html">
                <i className={props.icon}></i>
                <span>{props.title}</span></a>
            </li>
        </div>
    )
}
