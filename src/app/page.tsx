import React from 'react';
import { FC } from "react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/Hovercard"
import { Button } from '@/components/ui/Button';
import HomeFeed from '@/components/Homefeed';


export const Page: FC = ({ }) => {
  return (
    <div className="h-full">
      <HomeFeed></HomeFeed>
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



