import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus,FaPlus} from 'react-icons/fa'
import './styles.css'
export default function MenuItem({item}){

    const[displayCurrentChildren,setDisplayCurrentChildren]=useState({})

    function HundleToggleChildren(getCurrentLable){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLable]:!displayCurrentChildren[getCurrentLable]
        })
    }
console.log(displayCurrentChildren);

    return(
        <li className="menu-item-container">
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?<span style={{cursor:"pointer"}} onClick={()=>HundleToggleChildren(item.label)}>{
                        displayCurrentChildren[item.label]? <FaMinus/> :<FaPlus/>
                    }</span>:null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]?
                    <ul><MenuList list={item.children}/></ul>
                :null
            }
        </li>
    )
}

