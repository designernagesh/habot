import React from 'react';
import arrow from '/arrow.png'

export default function SignupToday() {
  return (
    <>
      <div className='signup my-32 px-6'>
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row gap-36'>
          <div className='w-full md:w-1/2'>
            <h2 className='text-4xl text-black font-bold mb-9'>Ready to dive into <span className='text-blue-dark'>HABOT?</span></h2>
            <p className='text-xl text-black leading-7 mb-9'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='bg-green text-white font-bold text-lg flex justify-center items-center gap-5 px-[42px] py-[15px] rounded-md'><span>Sign up Today !</span> <img src={arrow} /></button>
          </div>

          <div className='w-full md:w-1/2'>
            <div className='flex flex-wrap justify-between gap-y-6'>
              <a href='' className='link-orange'>Abu Dhabi</a>
              <a href='' className='link-orange'>Dubai</a>
              <a href='' className='link-orange'>Sharjah & Ajman</a>
              <a href='' className='link-orange'>Fujairah</a>
              <a href='' className='link-orange'>Ras Al Khaimah</a>
              <a href='' className='link-orange'>Umm Al Quwain</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
