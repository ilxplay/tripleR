"use client"

import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"
import { FC, useState } from "react"
import { signIn } from "next-auth/react"
import { Icons } from "./icons"
import { useToast } from "@/hooks/use-toast"

interface UserAuthProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<UserAuthProps> = ({ className, ...props }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      throw new Error
      await signIn("google")
    } catch (error) {
      //toast ntf
      toast({
        title: "There was a problem",
        description: "There was an error logging in with Google",
        variant: "destructive",

      })
    }
    finally {
      setIsLoading(false)
    }
  }

  return <div className={cn("flex justify-center", className)} {...props}>

    <Button onClick={loginWithGoogle}
      isLoading={isLoading}
      size="sm" className="w-full"
    >
      {isLoading ? null : <Icons.google className="h4 w-4 mr-2" />}
      Google
    </Button></div>

}

export default UserAuthForm
