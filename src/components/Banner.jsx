import React from 'react'

export default function Banner() {
    return (
        <>
            <div className='bg-banner-image bg-cover bg-center py-[200px] md:py-[250px] px-6'>
                <div className='text-white text-center flex flex-col items-center'>
                    <h1 className='font-bold text-4xl md:text-6xl'>Are You a Supplier?</h1>
                    <h2 className='font-normal text-4xl md:text-6xl mb-12'>Explore Matching Opportunities.</h2>
                    <div className='mb-10 flex flex-col md:flex-row items-center justify-center w-full gap-3'>
                        <div className="relative w-full md:w-[400px]">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_126)">
                                        <path d="M13.125 5.6875C12.642 5.6875 12.25 5.2955 12.25 4.8125V3.5H8.75V4.8125C8.75 5.2955 8.358 5.6875 7.875 5.6875C7.392 5.6875 7 5.2955 7 4.8125V3.5C7 2.53487 7.78488 1.75 8.75 1.75H12.25C13.2151 1.75 14 2.53487 14 3.5V4.8125C14 5.2955 13.608 5.6875 13.125 5.6875Z" fill="#E7760D" />
                                        <path d="M11.1213 13.4575C10.9637 13.5187 10.7362 13.5625 10.5 13.5625C10.2638 13.5625 10.0362 13.5187 9.82625 13.44L0 10.1675V16.8437C0 18.1737 1.07625 19.25 2.40625 19.25H18.5938C19.9237 19.25 21 18.1737 21 16.8437V10.1675L11.1213 13.4575Z" fill="#E7760D" />
                                        <path d="M21 6.78125V8.785L10.71 12.215C10.64 12.2413 10.57 12.25 10.5 12.25C10.43 12.25 10.36 12.2413 10.29 12.215L0 8.785V6.78125C0 5.45125 1.07625 4.375 2.40625 4.375H18.5938C19.9237 4.375 21 5.45125 21 6.78125Z" fill="#E7760D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_126">
                                            <rect width="21" height="21" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <input type="text" className="input-style" placeholder="Search your required service here" />
                        </div>

                        <div className="relative w-full md:w-[400px]">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 0C4.03917 0 0.414062 3.6252 0.414062 8.08594C0.414062 9.59531 0.831926 11.0643 1.627 12.3311L7.95186 22.6817C8.05977 22.8569 8.22148 22.9648 8.4102 22.9917C8.66617 23.0321 8.94931 22.9244 9.09751 22.6683L15.4405 12.2232C16.1951 10.9834 16.5859 9.54145 16.5859 8.08594C16.5859 3.6252 12.9608 0 8.5 0ZM8.5 12.1289C6.23603 12.1289 4.45703 10.2961 4.45703 8.08594C4.45703 5.86226 6.27632 4.04297 8.5 4.04297C10.7237 4.04297 12.543 5.86226 12.543 8.08594C12.543 10.2826 10.791 12.1289 8.5 12.1289Z" fill="#E7760D" />
                                </svg>
                            </div>
                            <input type="text" id="input-group-1" className="input-style" placeholder="Search your desired location here" />
                        </div>
                        <button className='bg-green text-white font-bold text-base flex justify-center items-center gap-5 px-[42px] py-[15px] rounded-md'>Search</button>
                    </div>
                    <p className='font-bold text-lg'>Are you a buyer? <a href='' className='ml-2 font-normal underline'>Click here if you are looking to post a requirements</a></p>
                </div>
            </div>
        </>
    )
}
