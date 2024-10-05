import { useState } from "react"
import Model from "./model"


export default function ModelTest(){
    const [currentDiv,setCurrentDiv] = useState(false)

    function hundleToggle(){
        setCurrentDiv(!currentDiv)
    }
    function onClose(){
        setCurrentDiv(false)
    }
    return(
        <div className="body-container">
            <button onClick={hundleToggle} style={{cursor:"pointer"}}> Display the model</button>
            {
                currentDiv?<Model onClose={onClose} footer={<p>Still no content yet</p>} />: null
            }
        </div>
    )
}