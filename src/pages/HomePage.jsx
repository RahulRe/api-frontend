import { useEffect, useState } from "react";
import axios from 'axios'
import Item from "../components/Item";
import {Link} from "react-router-dom"
import {VITE_BACKEND_URL } from "../App";

const HomePage = ()=>{
    const [product,setProduct]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    const getProducts = async()=>{
        try{
            setIsLoading(true);
            console.log(`BACKEND_URL : ${VITE_BACKEND_URL}`)
            const response = await axios.get(`${VITE_BACKEND_URL}/api/product`);
            console.log(response.data)
            setProduct(response.data)
            setIsLoading(false);



        }catch(error){

            console.log(error)
        }
    }

    useEffect(()=>{
        getProducts()

    },[])
    return (

       
        <div>
             <div>
                <Link to="/create" className="inline-block mt-4 shadow-md bg-blue-700 text-white rounded px-4 py-2 font-bold hover:bg-blue-500 hover:cursor-pointer">Create Product</Link>
            
            </div>
            <div className="mt-5">
                {isLoading?<div>Loading...</div>:(
                <>
                {product.length>0?(
                    <>
                    {product.map((item)=>{
                        return (
                            <Item item={item} key={item._id} getProducts={getProducts}/>
                        )
                    })}
                    </>
                ):(
                    <div> No products to show </div>
                )}
                </>
            )}</div>
        </div>

    )
}

export default HomePage;
