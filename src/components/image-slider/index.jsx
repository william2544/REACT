import { useState,useEffect } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'


export default function ImageSlider({url,limit}){
    const [Images,setImages]=useState([])
    const [currentSlide,setCurrentSlide]=useState(0)
    const [errorMgs,seterrorMgs]=useState(null)
    const [loading,setLoading]=useState(false)
    async function fetchImages(getUrl){
        try {
            setLoading(true)
            const response=await fetch(`${getUrl}?limit=${limit}`)
            const data=await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
                console.log(data);
            }
        } catch (e) {
            seterrorMgs(e.message)
            setLoading(false)
        }
    }
        useEffect(()=>{
            if (url !== '') {
                fetchImages(url)
            }
            
        },[url])
        if (loading) {
            return <h2>Loading...Please wait!!</h2>
        }
        if (errorMgs !== null) {
            return <div>Opp! an error occured. {errorMgs}</div>
        }

        function hundlePrevious(){
            setCurrentSlide(currentSlide ===0?Images.length-1:currentSlide-1)
        }
        function hundleNext(){
            setCurrentSlide(currentSlide === Images.length-1?0:currentSlide +1)
        }

    return (
        <div className="container">
            
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={hundlePrevious}/>
            {Images && Images.length >0?
            Images.map((image,index)=>{
                return <img
                 src={image.download_url}
                 alt={`Slide ${currentSlide}`} key={image.id}
                  className={currentSlide === index?'current-slide':'current-slide hide-current-image'}/>
            }):null}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={hundleNext}/>
            <span className="circle-indicator">
                {Images && Images.length>0?
                Images.map((_,index)=>{
                    return <button key={index} className={currentSlide===index?'circle-indicator active':'circle-indicator'} onClick={()=>setCurrentSlide(index)}></button>
                })
                :null}
            </span>
        </div>
    )
}