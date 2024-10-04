import { useEffect, useState } from "react"
import './index.css'

export default function ScrollIndicator({url}){
    const [data,setData]=useState([])
    const [loading,setLoading] = useState(false)
    const[error,setError] = useState(null)
    const[scrollPercentage,setScollPercentage] = useState(0)


    useEffect(()=>{
        fetchData(url)
    },[url])

    function handleScrollPercentage() {

        const howMuchScrolled = document.documentElement.scrollTop || document.body.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScollPercentage((howMuchScrolled/height)*100)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage)

        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])
    async function fetchData(getUrl){
        try {
            setLoading(true)

            const response = await fetch(getUrl)
            const data = await response.json()
            console.log(data);

            if (data && data.products && data.products.length > 0) {
                setData(data.products)
            }
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }
    if (error) {
       return <h3 className="errormgs">Ops! an error ocured, {error}! Please try again later.</h3>
    }
    if (loading) {
        return <h2>Loading content, Please wait...</h2>
    }
    // console.log(scrollPercentage);
    return(
    <div className="main-container">
        <div className="top-container">
            <h3>Custom Scroll Indicator</h3>
            <div className="track-progress-container">
                <div className="track-progress" style={{width:`${scrollPercentage}%`}}></div>
            </div>
        </div>
        <div>
            {
                data && data.length > 0 ?
                    data.map((element,id)=>{
                        return <p key={id}>{element.title}</p>
                    })
                :null
            }
        </div>

    </div>
    )
}