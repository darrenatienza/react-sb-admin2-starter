import React , {useState, useEffect} from 'react'
import {Collapse} from 'react-bootstrap';
import {useSideBarEntity } from '../entities';

export const SideBarCollapseItem = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [sideBarEntity, {setItemID}] = useSideBarEntity();

    const collapseItems = props.items.map((name, index) => 
    // when index are same, set element as active
    <a key={index} className={`collapse-item ${index === selectedIndex ? "active" : ""}`} href= " # " onClick={() => setSelectedIndex(index)} >{name}</a>
    );

    const toggle =(id) =>{

        if(sideBarEntity.itemID === id){
            setItemID(-1);
        }else{
            setItemID(id);
        }
    }
    return (
        <>
            {/*<!-- Nav Item - Pages Collapse Menu -->*/}
            <li className={`nav-item ${props.id === sideBarEntity.itemID ? "active" : ""}`}>
                <a className={`nav-link ${props.id === sideBarEntity.itemID? "" : "collapsed"} `} href="# " data-toggle="collapse" aria-expanded="true" onClick={() => toggle(props.id)}>
                    <i className={props.icon}></i>
                    <span>{props.title}</span>
                </a>
                <Collapse in = {props.id === sideBarEntity.itemID ? true : false}>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{props.header}</h6>
                        {collapseItems}
                    </div>
                </div>
                </Collapse>
            </li>
            
            
        </>
    )
}
