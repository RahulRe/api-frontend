import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const CreatePage =()=>{

    const [name,setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleCreate = async(e)=>{
        e.preventDefault();
        if(name===""||quantity===""||price===""){
            alert("please fill incomplete fields")
            return
        }
        try{
            setIsLoading(true)
            const response = await axios.post(`${VITE_BACKEND_URL}/api/product`,{name: name,quantity:quantity,price:price})
            alert(`saved ${response.data.name} sucessfully`)
            setIsLoading(false)
            navigate("/")

        }catch(error){
            console.log(error)
            setIsLoading(false)
        }

    }
    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 mt-6 rounded ">
            <h2 className="font-semibold text-2xl mb-4 text-center">Create Product</h2>
            <form onSubmit={handleCreate}>
                <div className="space-y-2">
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Name" className="block border p-3 rounded w-full mt-3 focus:border-blue-200" ></input>
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type="text" onChange={(e)=>setQuantity(e.target.value)} value={quantity} placeholder="Quantity" className="block border p-3 rounded w-full mt-3 focus:border-blue-200" ></input>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder="Price" className="block border p-3 rounded w-full mt-3 focus:border-blue-200" ></input>
                    </div>
                    <div>
                        {!isLoading && (<button className="block w-full bg-blue-600 rounded px-4 py-2 text-white font-bold hover:bg-blue-400 hover: cursor-pointer">Create</button>)}
                        
                    </div>

                </div>

            </form>
        </div>
    )
}

export default CreatePage;