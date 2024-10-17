import Link from "next/link";
import { Icons } from "./icons"
import UserAuthForm from "./UserAuthForm";
import Image from "next/image";


const SignIn = () => {
  return <div
    className="containter mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
    <div className="flex flex-col space-y-2 text-center">

      <h1 className=" text-3xl font-semibold tracking-tight ">Welcome</h1>
      <p className="text-sm max-w-sm mx-auto">
        By continuing, you are setting up an account
        and agree to our user terms User Agreement and Privacy policy.
      </p>
      <UserAuthForm ></UserAuthForm>


    </div>
  </div>
}

export default SignIn;