import { useState } from "react"

export default function RandomColor(){
    const[typeOfColor,settypeOfColor]=useState('hex')
    const[color,setcolor]=useState('#ffffff')

    function generateColorUtility(length){
        return Math.floor(Math.random()*length)
    }
    function generateRGBColor(){
        let g=generateColorUtility(256)
        let r=generateColorUtility(256)
        let b=generateColorUtility(256)
        const rgbcolor=`rgb(${r},${g},${b})`
        setcolor(rgbcolor)
    }
    function generateHEXColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor='#'

        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateColorUtility(hex.length)]
        }
        setcolor(hexColor)
        console.log(hexColor);
    }
    return(
        <div style={{
            backgroundColor:color,
            height:'100vh'
        }
        }>
            <button onClick={()=>settypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={()=>settypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={()=>typeOfColor === 'hex'?generateHEXColor():generateRGBColor()}>Generate Random Color</button>
        </div>
    )
}