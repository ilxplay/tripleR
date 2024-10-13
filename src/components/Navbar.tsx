import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Settings, LogIn } from "lucide-react"
import { Button, buttonVariants } from './ui/Button'
import React from 'react'



const Navbar = async () => {


  const session = await getServerSession(authOptions)
  return (
    <div className='bg-gradient-to-r from-orange-400 to-purple-orange p-3 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href="/" className='text-2xl font-bold text-primary'>
              TripleR
            </Link>
          </div>
          <div className="flex items-center space-x-4">

            <Link href="/settings">
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
              <Button variant="ghost" className="sm:hidden">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>

            {session?.user ? (
              <p>youre logged in</p>
            ) : (
              <Link href='/sign-in' className={buttonVariants()}>
                Sign In
              </Link>

            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar