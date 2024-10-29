import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import PosterImage from '/posterImage.png';
import iconTick from '/icon-tick.png';

export default function PostRequirements() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Buyer", "Supplier"];
  const contents = [
    {
      "text": ["Post your requirements.",
        "Sit back for multiple suppliers to contact you.",
        "Choose among the suppliers based on the ratings and reviews."]
    },
    {
      "text": ["Supplier Text"]
    }
  ]

  return (
    <>
      <div className='post-requirements my-36 px-6'>
        <div className='max-w-[1316px] mx-auto bg-blue py-32 px-14'>
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-[48%]'>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=IZLp-TZyDkQ"
                light={PosterImage}
                width={"100%"}
                controls={true}
              />
            </div>

            <div className='w-full md:w-[48%]'>
              <div className='flex gap-3 mb-8 justify-evenly items-center'>
                {
                  tabs.map((tab, index) => <button
                    onClick={() => setActiveTab(index)}
                    key={`tab_${index}`}
                    className={`px-4 py-3 flex-1 font-bold hover:text-orange ${activeTab === index ? "text-orange border-b-4 border-orange" : "text-white"}`}>{tab}</button>)
                }
              </div>

              <div className='flex flex-col mx-auto'>
                {contents && contents.map((content, index) => {
                  if (activeTab === index) {
                    return <div className='text-white' key={`content_${index}`}>
                      <ul className="list-tick">
                        {content.text.map(item =>
                          <li className='flex items-center mb-3 gap-3'>
                            <span><img src={iconTick} /></span>
                            <span>{item}</span>
                          </li>)}
                      </ul>
                    </div>
                  }
                  return null
                }
                )}
              </div>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}
