import React from 'react';

import Image from "next/image"
import { HomeIcon } from "lucide-react"

const HomePage: React.FC = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Sign-in', href: '/sign-in' },

  ];

  return (
    <div className='mx-auto'>

      <h1 className="m-5 flex justify-center font-extrabold text-3xl md:text-4xl">ACTIONS</h1>

      <div className="justify-center grid grid-cols-3 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6" >
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
          <div className="bg-purple-orange px-6 py-4">
            <p className="font-semibold py-3 flex-items gap1.5"></p>
            <HomeIcon className="w-6 h-6" />
          </div>
        </div>
      </div>

    </div>
  )

}
export default HomePage;
