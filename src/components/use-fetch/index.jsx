import { useEffect, useState } from "react";

export default function UseFetch(url, options={}) {
    const [data,setData] = useState(null)
    const [loading, setLoading] =useState(false)
    const [ error,setError] = useState(false)

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch(url, options)
            if (!response.ok) throw new Error(response.statusText)
            const results = await response.json()
            console.log(results);
            setLoading(false)
            setData(results)
        } catch (e) {
            setError(`${e.message}, Some error occured`)
            setLoading(false)
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[url])

    return {data , loading , error}
    
}