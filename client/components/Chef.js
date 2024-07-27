import React from 'react'
import Link from "next/link";

export default function Chef() {
  return (
    <div className='bg-custom-dark p-4'>
    <div className='flex justify-center'>
    <img src='/images/main-img-6.jpg' width={'20%'} className='flex justify-center'></img>
    </div>
        
        <div className='flex uppercase justify-center mt-4 text-xl text-custom-yellow'>
        <p>m i c h a e l </p>
        <p className='ml-4'>g o r d o n</p>

        </div>
        <div className='flex justify-center mt-2 text-white'>
        <p>Assistant</p>
        <p className='ml-2'>Chef</p>
        </div>
    </div>
  )
}
