import { useState } from "react"
import Model from "./model"


export default function ModelTest(){
    const [currentDiv,setCurrentDiv] = useState(false)

    function hundleToggle(){
        setCurrentDiv(!currentDiv)
    }
    return(
        <div className="body-container">
            <button onClick={hundleToggle}>Display the model</button>
            {
                currentDiv?<Model/>:null
            }
        </div>
    )
}