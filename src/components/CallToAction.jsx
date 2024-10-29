import React from 'react'

export default function CallToAction() {
  return (
    <>
      <div className='call-to-action bg-sky-blue px-6 py-28 mb-32'>
        <div className='max-w-[1316px] mx-auto'>
          <div className='flex flex-col md:flex-row justify-around items-center'>
            <h2 className='mb-8 md:mb-0 text-center md:text-left text-4xl text-black font-bold'>
              Let Suppliers <span className='inline-block underline underline-offset-8 decoration-solid decoration-4 decoration-orange'>Find You</span>
            </h2>
            <button className='bg-orange text-white font-bold text-lg flex justify-center items-center gap-5 px-[42px] py-[15px] rounded-md'>
              Get Verified
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
