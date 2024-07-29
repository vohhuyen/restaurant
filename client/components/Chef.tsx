import React from 'react'
import Link from "next/link";

export default function Chef() {
  return (
    <div className='bg-custom-dark p-4'>
    <div className='flex justify-center'>
    <img src='/images/main-img-6.jpg' width={'20%'} className='flex justify-center'></img>
    </div>
        
        <div className='flex tracking-[5px]  uppercase justify-center mt-4 text-xl text-custom-yellow'>
        <p>michael </p>
        <p className='ml-4'>gordon</p>

        </div>
        <div className='flex tracking-[5px]  justify-center mt-2 text-white'>
        <p>Assistant</p>
        <p className='ml-2'>Chef</p>
        </div>
    </div>
  )
}
