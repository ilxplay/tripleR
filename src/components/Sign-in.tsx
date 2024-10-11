import Link from "next/link";
import { Icons } from "./icons"
import UserAuthForm from "./UserAuthForm";


const SignIn = () => {
  return <div
    className="containter mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
    <div className="flex flex-col space-y-2 text-center">
      <Icons.logo className="mx-auto h-6 w-6 " />
      <h1 className=" text-3xl font-semibold tracking-tight ">Welcome</h1>
      <p className="text-sm max-w-sm mx-auto">
        By continuing, you are setting up an account
        and agree to our user terms User Agreement and Privacy policy.
      </p>
      <UserAuthForm ></UserAuthForm>
      <p className="px-8 text-center text-sm text-zinc-700">
        New to TripleR?{" "}
        <Link href="/sign-up"
          className="hover:text-zinc-800 text-sm underline underline-offset-4">
          Sign Up
        </Link>
      </p>
    </div>
  </div>
}

export default SignIn;