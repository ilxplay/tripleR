import React from 'react';
import { Header } from '../components/ui/Header';
import Image from "next/image"

const HomePage: React.FC = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Sign-in', href: '/sign-in' },
    { name: 'Log-in', href: '/log-in' },
  ];

  return <div>

    <Header title="tripleR" links={links} />

    <style className="">{"body{background-color: #ffb766}"}</style>
    <div className="flex w-full items-center" >

    </div>

  </div>


}
export default HomePage;
