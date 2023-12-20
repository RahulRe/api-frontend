import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { VITE_BACKEND_URL } from "../App";

const EditPage = ()=>{

    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(false)
    const [product,setProduct] = useState({
        name:"",
        quantity:"",
        price:""
    })
    const navigate = useNavigate()

    const handleUpdate= async(e)=>{
        e.preventDefault();
        setIsLoading(true)
        try{
            const response = await axios.put(`${VITE_BACKEND_URL}/api/product/${id}`,product)
            alert(`${product.name} is sucessfully edited`)

            setIsLoading(false)
            navigate("/")

        }catch(error){
            setIsLoading(false)
            console.log(error)
        }

    }

    const getProduct = async()=>{
        setIsLoading(true)
        try{
            const response = await axios.get(
              `${VITE_BACKEND_URL}/api/product/${id}`
            );
            setProduct({
              name: response.data.name,
              quantity: response.data.quantity,
              price: response.data.price,
            });
            setIsLoading(false);

        }catch(error){
            setIsLoading(false);
            console.log(error)

        }
        
    }

    useEffect(()=>{
        getProduct();
    },[])
    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 mt-6 rounded ">
            <h2 className="font-semibold text-2xl mb-4 text-center">Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={(e)=>setProduct({...product,name:e.target.value})} value={product.name} placeholder="Name" className="block border p-3 rounded w-full mt-3 focus:border-blue-200" ></input>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="text" onChange={(e)=>setProduct({...product,quantity:e.target.value})}   value={product.quantity} placeholder="Quantity" className="block border p-3 rounded w-full mt-3 focus:border-blue-200" ></input>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" onChange={(e)=>setProduct({...product,price:e.target.value})}  value={product.price} placeholder="Price" className="block border p-3 rounded w-full mt-3 focus:border-blue-200" ></input>
                    </div>
                    <div>
                        {!isLoading && (<button className="block w-full bg-blue-600 rounded px-4 py-2 text-white font-bold hover:bg-blue-400 hover: cursor-pointer">Update</button>)}
                        
                    </div>

                </div>

            </form>
        </div>

    )
}

export default EditPage;