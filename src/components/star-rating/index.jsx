import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'
export default function StarRating({noOfStars=5}){
    const [rating,setrating]=useState(0)
    const [hover,sethover]=useState(0)

    function hundleClick(getCurrentIndex){
        setrating(getCurrentIndex)
    }
    function hundleMousemove(getCurrentIndex) {
        sethover(getCurrentIndex)
        
    }
    function hundleMouseLeave(){
        sethover(0)
    }
    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index++;
                    return <FaStar
                    key={index}
                    className={index <=(hover || rating)?'active':'inactive'}
                    onClick={()=>hundleClick(index)}
                    onMouseMove={()=>hundleMousemove(index)}
                    onMouseLeave={()=>hundleMouseLeave()}
                    size={40}
                    style={{cursor:'pointer'}}
                    />
                })
            }
        </div>
    )
}