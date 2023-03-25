import React from 'react'
import { Link } from 'react-router-dom'
import { footer } from '../constants'

const Footer = () => {
  return (
    <>
    <div>
    <div className='bg-gray-800 text-white p-4 absolute bottom-0 w-full'>
        <div className='text-center gap-8 flex flex-row justify-center '>
        {
                footer.map((items) => (
                    <div className='cursor-pointer'>
                    <Link to={items.id}>
                    <h1>{items.title}</h1>
                    </Link>
                    </div>
                ))
            }
        </div>
        <p className='text-[10px] text-center mb-1'>
                This website is under construction
        </p>
    </div>
    </div>
    </>
  )
}

export default Footer