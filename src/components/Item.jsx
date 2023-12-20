import {Link, } from 'react-router-dom'
import axios from 'axios';
import { VITE_BACKEND_URL } from '../App';

const Item = ({item,getProducts})=>{

  

  const handleDelete = async(id)=>{
    try{
      await axios.delete(`${VITE_BACKEND_URL}/api/product/${id}`)
      alert('Delete of product is sucess')
      getProducts();
      

    }catch(error){
      console.log(error)

    }
  }



    return (
      <div key={item._id}>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
          
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>

            <div className='flex justify-content: space-around'>
              <p className=' shadow-md w-fit px-3 py-2 rounded mb-3' >Quantity: {item.quantity}</p>
              <p className=' shadow-md w-fit px-3 py-2 rounded mb-3' >Price: {item.price}</p>

            </div>

            
         
          
          <Link
            to={`/edit/${item._id}`}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          <button onClick={()=>handleDelete(item._id)} className='bg-blue-800 text-white font-bold px-3 py-2 rounded-sm ml-5 hover:bg-blue-600 hover:cursor-pointer'>Delete</button>
        </div>
      </div>
    );
}

export default Item;