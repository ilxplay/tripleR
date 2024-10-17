"use client"

import { Input } from "@/components/ui/Input"
import { useState } from "react"

const Page = () => {
  const [input, setInput] = useState<string>("")

  return (

    <div className='container flex items-center h-full max-w-3xl mx-auto translate-y-32'>
      <div className='relative bg-white w-full h-fit p-4 rounded-lg space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>Create a Private Discussion</h1>
        </div>

        <hr className='bg-red-500 h-px' />

        <div>
          <p className='text-lg font-medium'>Name</p>

          <div className='relative'>
            <p className='absolute text-sm left-0.5 w-4 inset-y-0 grid place-items-center text-zinc-400'>
              dc/
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='pl-6'
            />
          </div>
        </div>

      </div>
    </div>

  )
}
export default Page