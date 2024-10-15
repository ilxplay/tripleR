import React from 'react';
import { FC } from "react"
import Image from "next/image"
import { HomeIcon } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/Hovercard"
import { Button, buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Page: FC = ({ }) => {
  return (
    <div className='h-full'>
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
      <div className='flex justify-center fixed bottom-12 left-0 w-full'>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">
              <p className='text-2xl font-bold'>
                @TripleR
              </p>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold">TripleR</h4>
                <p className="text-lg">
                  Creators: @ilxplay
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard></div>

    </div>

  )
}

export default Page



