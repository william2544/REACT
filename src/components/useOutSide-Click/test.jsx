import { useRef, useState } from "react"
import UseOnclickOutSide from "."


export default function UseClickOutsideTest(){

    const [showContent, setShowContent] = useState(false)
    const ref=useRef()
    UseOnclickOutSide(ref, ()=>setShowContent(false))



    return (
        <div>
            {
                showContent ?
                    <div ref={ref}>
                        <h2>This is the heading</h2>
                        <p>The content should be displayed onliy if you click the btn and will disapear when you click outside</p>
                    </div>
                :(
                    <button onClick={()=>setShowContent(true)}>Click here to open</button>
                )
            }
        </div>
    )
}