import React from 'react';
import { FC } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/Hovercard"
import { Button } from '@/components/ui/Button';
import HomeFeed from '@/components/HomeFeed';
import PrivateFeed from '@/components/PrivateFeed';


export const Page: FC = ({ }) => {
  return (
    <div className="h-full">
      <HomeFeed></HomeFeed>
      <PrivateFeed></PrivateFeed>
      <div className='min-w-full flex justify-center fixed lg:bottom-8 md:bottom-2 sm:bottom-1 botton:2 left-0'>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">
              <p className='lg:text-2xl md:text-lg sm:text-sm font-bold'>
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



