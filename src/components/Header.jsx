import React, { useState } from 'react';
import habotLogo from '/logo-habot.png';

export default function Header() {
  const [active, setActive] = useState(false);
  const menuHandler = () => {
    setActive(!active);
  }

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://habot.io/" className="flex items-center">
            <img src={habotLogo} className="h-8" alt="Habot Logo" />
          </a>
          <div className="flex md:order-2 items-center">
            <button type="button" className="text-green hover:text-white border border-green hover:bg-green font-bold text-base rounded-md px-8 py-4 text-center">Login / Sign Up</button>
            <button onClick={menuHandler} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`${active === true ? '' : 'hidden'} items-center grow justify-end md:mr-7 w-full md:flex md:w-auto md:order-1 p-6 md:p-0`} id="navbar-sticky">
            <ul className="flex flex-col md:flex-row gap-8">
              <li>
                <a href="#" className="block text-base text-grey">Find Suppliers</a>
              </li>
              <li>
                <a href="#" className="flex text-base text-grey items-center">Find Service Tags
                  <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </>
  )
}
