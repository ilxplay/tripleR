import { GlobeLock } from "lucide-react"
import React from "react"
import { buttonVariants } from "./ui/Button"
import Link from "next/link"

const PrivateFeed = () => {
  return (
    <div className="h-full">
      <div className="justify-center grid lg:grid-cols-32 md:grid-cols-6 gap-y-4 md:gap-x-4 py-6 lg:px-16 md:px-6" >

        <div className="overflow-hidden h-fit rounded-lg border border-gray-200 col-span-3 md:col-span-1 order-first md:order-last">
          <div className="bg-purple-orange px-4 py-3">
            <p className="font-semibold py-3 flex-items gap1.5">
              <GlobeLock className="w-6 h-6" />
              Private
            </p>
          </div>
          <div className="-my-3 divide-y divide-gray-100 px-4 py-3 text-sm leading-4">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500 text-center">
                It's your private feed. You can privately discuss added products.
              </p>
            </div>
            <Link className={buttonVariants({ className: "w-full mt-4 mb-6" })} href="/dc/create/privatedc">
              <p className="text-center font-thin antialiased">
                Create a private discussion
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivateFeed