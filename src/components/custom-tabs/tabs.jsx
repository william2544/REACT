import { useState } from "react"

import './tabs.css'

export default function Tabs({tabContent,onChange}) {
    
    const [currentTabState,setCurrentTabState]=useState(0)


    function handleOnclick(getCurrentIndex) {
        setCurrentTabState(getCurrentIndex)
        onChange(getCurrentIndex)
    }
    return (
        <div className="wrapper">
            <div className="heading">
                {
                    tabContent && tabContent.length > 0?
                        tabContent.map((tabItem,index)=>{
                            return <div onClick={()=>handleOnclick(index)} key={tabItem.label} className="tabs-container">
                                <span className="lable">{tabItem.label}</span>
                            </div>
                        })
                    :null
                }
            </div>
            <div className="content">
                <h3>{tabContent[currentTabState] && tabContent[currentTabState].content}</h3>
            </div>
        </div>
    )
}