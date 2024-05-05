
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const navigate=useNavigate()
  return (
    <div className=' text-black h-[90vh]   items-center justify-center flex  '>
    <form className='flex flex-col items-center justify-center w-[350px] h-[350px] border-2 border-green-400   focus:border rounded-md  space-y-3' action="" method="post">
      <input required onChange={(e)=>{setName(e.target.value)}}  value={name }className=' focus:outline-none bg-transparent  border-[1px] rounded-md border-black placeholder-black focus:border-green-400 py-2 px-7' placeholder='User name' type="text" name="" id="" />
      <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline-none bg-transparent  border-[1px] rounded-md border-black placeholder-black focus:border-green-400 py-2 px-7' placeholder='Password' type="password" name="" id="" />
      <button  className='bg-[#21C55C] font-semibold hover:bg-white hover:text-green-500  text-xl  rounded-md text-white px-3 py-1' type="button">Log In</button>
    
    </form>
 </div>
  )
}

export default Login