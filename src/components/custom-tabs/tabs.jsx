import { useState } from "react"



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
                            return <div onClick={()=>handleOnclick(index)} key={tabItem.label}>
                                <span className="lable">{tabItem.label}</span>
                            </div>
                        })
                    :null
                }
            </div>
            <div className="content">
                {
                    tabContent[currentTabState] && tabContent[currentTabState].content
                }
            </div>
        </div>
    )
}