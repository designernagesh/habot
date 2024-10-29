import React from 'react'

export default function Card(props) {
  return (
    <>
      <div className='w-full md:w-1/3 h-[254px] text-center flex items-center justify-center flex-col px-12 odd:bg-sky-blue'>
        <img src={props.image} className='mb-7' />
        <p className='text-xl leading-6 font-medium'>{props.text}</p>
      </div>
    </>
  )
}
