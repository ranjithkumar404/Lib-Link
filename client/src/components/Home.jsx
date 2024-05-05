import React from 'react'

const Home = () => {
  return (
    <div className='p-3 flex flex-col justify-center items-center'>
    <div>
    <input className='focus:outline-none  focus:border-green-400 p-3 border-2 rounded-md w-[450px]' placeholder='Search your book' type="text" />
    </div>
    </div>
  )
}

export default Home