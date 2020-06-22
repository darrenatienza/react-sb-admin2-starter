import React, { useState,useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import { Collapse } from "react-bootstrap";
import { useSideBarEntity } from "../entities";

export const SideBarCollapseItem2 = (props) => {
  const [selectedItemName, setSelectedItemName] = useState("");
  const [sideBarEntity, { setItemID }] = useSideBarEntity();
  const [collapseContainer, {setCollapseContainer}] = useState("");
  
  const [items, setItems] = useState([]); 
  useEffect(() => {
    props.items.forEach(element => {
      setItems(element.collapseItems);
    });
    
  }, [props.items]);
  const toggle = (id) => {
    if (sideBarEntity.itemID === id) {
      setItemID(-1);
    } else {
      setItemID(id);
    }
  };
  
  return (
    <>
      {/*<!-- Nav Item - Pages Collapse Menu -->*/}
      <li
        className={`nav-item ${
          props.id === sideBarEntity.itemID ? "active" : ""
        }`}
      >
        <a
          className={`nav-link ${
            props.id === sideBarEntity.itemID ? "" : "collapsed"
          } `}
          href="# "
          data-toggle="collapse"
          aria-expanded="true"
          onClick={() => toggle(props.id)}
        >
          <i className={props.icon}></i>
          <span>{props.title}</span>
        </a>
        <Collapse in={props.id === sideBarEntity.itemID ? true : false}>
          <div
            id="collapseTwo"
            className={`collapse 
      
        `}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
           
            {props.items.map(({header,collapseItems},index) => 
              <React.Fragment key={index} >
                    <h6  className="collapse-header">
                      {header}
                    </h6>
                    
            {collapseItems.map((name,index) => {
                return(
                  <a
                  key={index}
                  className={`collapse-item ${
                    name === selectedItemName ? "active" : ""
                  }`}
                  href=" # "
                  onClick={() => setSelectedItemName(name)}
                >
                  {name}
                </a>
                   
                );
            })}
                    
              </React.Fragment>
                
                  
               )}
            </div>
          </div>
        </Collapse>
      </li>
    </>
  );
};
