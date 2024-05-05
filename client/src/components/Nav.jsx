import React from 'react'
import { Link } from 'react-router-dom'
import { ImBooks } from "react-icons/im";
const Nav = () => {
  return (
    <div className='flex justify-between backdrop-blur-sm items-center p-4 '>
      <div>
<Link className='text-[#21C55C] flex space-x-2  items-center text-2xl' to="/" >
  <h1 >Lib-Link </h1> 
<ImBooks size={30} />
</Link>

      </div>
<div>
<Link to="/signin"  className='bg-[#21C55C] font-semibold hover:bg-white hover:text-green-500  text-xl  rounded-md text-white px-3 py-1' type="button">Sign in</Link>
</div>
    </div>
  )
}

export default Nav