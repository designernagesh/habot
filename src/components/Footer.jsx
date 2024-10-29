import React from 'react'
import logoWhite from '/logo-habot-white.png'
import linkedIn from '/linkedin.png'
import twitter from '/twitter.png'
import facebook from '/facebook.png'
import instagram from '/instagram.png'

export default function Footer() {
  const socialLinks = [
    {
      "id": 1,
      "icon": linkedIn,
      "alt": 'Linked In'
    },
    {
      "id": 2,
      "icon": twitter,
      "alt": 'Twitter',
    },
    {
      "id": 3,
      "icon": facebook,
      "alt": 'Facebook'
    },
    {
      "id": 4,
      "icon": instagram,
      "alt": 'Instagram',
    }
  ]
  return (
    <>
      <footer className='bg-blue-navy py-11 text-white'>
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between py-6 border-y border-[#FFFFFF33] pl-6 items-center'>
          <div className='w-full md:w-8/12 flex flex-col md:flex-row gap-6 md:gap-12 mb-6 md:mb-0'>
            <div className='w-[206px] flex flex-col'>
              <img src={logoWhite} alt='Habot Logo' className='mb-4' />
              <p className='font-light text-base'>© R Singhania</p>
            </div>

            <div className='flex flex-col'>
              <h4 className='font-bold text-base mb-3'>Company</h4>
              <a href='' className='font-light text-sm mb-1'>About</a>
              <a href='' className='font-light text-sm mb-1'>FAQ</a>
            </div>

            <div className='flex flex-col'>
              <h4 className='font-bold text-base mb-3'>Terms</h4>
              <a href='' className='font-light text-sm mb-1'>Data privacy</a>
              <a href='' className='font-light text-sm mb-1'>Terms</a>
              <a href='' className='font-light text-sm mb-1'>Accessibility</a>
            </div>

            <div className='flex flex-col'>
              <h4 className='font-bold text-base mb-3'>Related</h4>
              <a href='' className='font-light text-sm mb-1'>Find Buyer</a>
              <a href='' className='font-light text-sm mb-1'>Feedback</a>
            </div>
          </div>
          <ul className='flex gap-4'>
            {
              socialLinks.map(link => <li><a href='' className='p-3 border border-[#FFFFFF33] rounded-full w-10 h-10 flex justify-center items-center'><img src={link.icon} alt={link.alt} /></a></li>)
            }
          </ul>
        </div>

      </footer >
    </>
  )
}
