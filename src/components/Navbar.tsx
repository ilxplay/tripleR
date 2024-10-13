import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './icons'
import { buttonVariants } from './ui/Button'
import React from 'react'



const Navbar = async () => {


  const session = await getServerSession(authOptions)
  return (
    <div className='bg-gradient-to-r from-orange-400 to-purple-orange p-3 shadow-lg'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>

          <p className='text-white text-3xl font-bold'>TripleR</p>
        </Link>

        {/* actions */}
        {session?.user ? (
          <p>youre logged in</p>
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar