import React from 'react';
import { FC } from "react"
import Image from "next/image"
import { HomeIcon } from "lucide-react"

export const Page: FC = ({ }) => {
  return (
    <div className='mx-auto'>
      <h1 className="m-5 flex justify-center font-extrabold text-3xl md:text-4xl">ACTIONS</h1>
      <div className="justify-center grid grid-cols-3 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6" >
        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last">
          <div className="bg-purple-orange px-6 py-4">
            <p className="font-semibold py-3 flex-items gap1.5">
              <HomeIcon className="w-6 h-6" />
              Home
            </p>
          </div>
          <div className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500">
                It's you personal feed. You can adjust it in the Feed settings menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page



