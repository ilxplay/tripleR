import Image from "next/image"
import React from "react"
import { FC } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"
import SignIn from "@/components/Sign-in"

const page: FC = ({ }) => {
  return <div className="absolute inset-0">
    <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
      <Link href="/" className={cn(
        buttonVariants({ variant: "outline" }), "self-start -mt-20"
      )}>
        Home
      </Link>

      <SignIn />
    </div>
  </div>
}

export default page



