import React, { useState } from 'react'
import SidebaarApp from './SidebaarApp'
import NavbarApp from './NavbarApp'
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Mange_food() {
    const navigation = useNavigate();
    const[data,setdata]= useState([]);
    //  const navigate = useNavigate();
    axios.get(`http://localhost:4000/Add_food`).then((res)=>{
           setdata(res.data)
    })
   const DeletData = (id)=>{
    axios.delete(`http://localhost:4000/Add_food/${id}`).then(()=>{
          // setdata(data.filter(item=>{item.id !== id}))
          window.location.reload();
 })

   }

// const EditData = (id)=>{
//   axios.put(`http://localhost:4000/Add_food/${id}`).then(()=>{
//        navigate('/addfood');
// })

// }
  return (
    <div className="flex">
    <SidebaarApp />
    <div className="flex-grow p-6">
     <NavbarApp/>
     <div className='ml-64 pt-10 p-2'>
      <h1 className='font-bold text-4xl p-3 '>Manage Food</h1>
      <hr className='w-48 border-spacing-2 h-2 ml-6 border-black' />

      <table cellPadding={15} className='mt-6' >
        <thead>
            <tr className='bg-slate-300 text-lg rounded-md font-bold'>
                <td>Foodname</td>
                <td>Image</td>
                <td>Qty</td>
                <td>Oldprice</td>
                <td>newprice</td>
                <td>Description</td>
                <td>AddedDate</td>
                <td >Delete</td>
                <td>Edit</td>


            </tr>
        </thead>
        <tbody>
           
                {data && data.map((item)=>(
                    <tr className='border-b-2'>
                <td>{item.food_name}</td>
                <td className='h-20 w-20'><img src={item.Img_url} /></td>
                <td>{item.Qty}</td>
                <td>{item.Oldprice}</td>
                <td>{item.NewPrice}</td>
                <td>{item.Description}</td>
                <td>{item.addedDate}</td>
                <td className='text-center' ><button onClick={()=>DeletData(item.id)}><FaTrash className='text-red-600'/></button></td>
                <td className='text-right'><button  onClick={()=>navigation(`/edit/${item.id}`)}><FaEdit className='text-red-600'/></button></td>
              
                </tr>
                
            ))}
            

            
        </tbody>
      </table>
   </div>
    </div>
  </div>
   
  )
}
