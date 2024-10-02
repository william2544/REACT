import { useEffect, useState } from "react";
import './index.css'


export default function LoadMoreData(){
    const[loading,setLoading]=useState(false)
    const[products,setProducts]=useState([])
    const[count,setCount]=useState(0)
    const[disabledbtn,setDisablebtn]=useState(false)
    async function fetchImage(){
        try {
            setLoading(true)
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0?0:count*20}`)
            const data =await response.json()
            console.log(data);
            if(data && data.products && data.products.length){
                if (count === 0) {
                    setProducts(data.products)
                    setLoading(false)
                }else{
                setProducts((preProduct)=>[...preProduct, ...data.products])
                setLoading(false)
                }
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchImage();
    },[count])

    useEffect(()=>{
        if(products && products.length === 60){
            setDisablebtn(true)
        }
    },[products])


    if(loading){
        return <h2>Loading products, please wait...</h2>
    }

    return(
        <div className="container">
            {/* <div className="product-cotainer">
                
            </div> */}
            {
                products && products.length?
                (products.map((product)=>{
                    return <div className="product" key={product.id}>
                        <img src={product.images[0]} alt={product.title} />
                        <h5 className="product-title">{product.title}</h5>
                        <p>${product.price}</p>
                    </div>
                }))
                :null
            }
            <div className="btn-container">
                <button 
                onClick={()=>setCount(count+1)}
                disabled={disabledbtn}
                className={loading?'':'btn-loading'}
                >{loading?'Loading more...':'Load more products'}</button>
                <div>{disabledbtn?"The products have reach maximum of 150":null}</div>
            </div>
        </div>
    )

}