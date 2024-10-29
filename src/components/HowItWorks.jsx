import React from 'react'
import icon1 from '/icon-1.png'
import icon2 from '/icon-2.png'
import icon3 from '/icon-3.png'
import icon4 from '/icon-4.png'
import icon5 from '/icon-5.png'
import icon6 from '/icon-6.png'
import Card from './Card'

export default function HowItWorks() {
  const listItems = [
            {
                "id": 1,
                "image": icon1,
                "text": "Select Your Role and Sign Up"
            },
            {
                "id": 2,
                "image": icon2,
                "text": "Buyers Post Your Requirements"
            },
            {
                "id": 3,
                "image": icon3,
                "text": " Review, Select, and Contact the Best Suppliers"
            },
            {
                "id": 4,
                "image": icon4,
                "text": " Suppliers Complete your profile and get notified for opportunities"
            },
            {
                "id": 5,
                "image": icon5,
                "text": "Contact to Buyers and Share your Quote for the service"
            },
            {
                "id": 6,
                "image": icon6,
                "text": "Both the Parties can Connect and Make Business Leave a Feedback"
            }
        ]
  return (
    <>
    <div className='call-to-action text-center px-6 mb-48'>
    <div className='max-w-[1200px] mx-auto'>
    <h2 className='text-4xl text-black-raisin font-bold mb-6'>How it works?</h2>
      <p className='max-w-[840px] text-lg leading-7 mx-auto mb-20'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      <div className='max-w-[1200px] mx-auto flex flex-wrap'>
        {
          listItems.map( item => <Card image={item.image} text={item.text} /> )
        }
      </div>
      </div>
      </div>
    </>
  )
}
