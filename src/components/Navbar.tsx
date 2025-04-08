"use client";

import Link from "next/link";

import { Zap } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
  ];  
  const path = usePathname().split('/')[1]

  return (
    <nav className="fixed w-full flex justify-center items-center top-4  z-50  mt-4 ">
      <div className=" mx-auto px-4 backdrop-blur-sm border border-orange-500/20 shadow-lg rounded-md">
        <div className="flex items-center justify-between h-20 gap-4 p-2">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-extrabold ${path === '/' ? 'bg-[#f2a470]' : ''} mr-2 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent hover:scale-105 transition-transform`}
          >
            <Zap fill="#d45f29" stroke="#f2a470" className="size-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-slate-300 text-sm font-mono uppercase ${path === item.name.toLocaleLowerCase() ? '   border-b-[1px] border-[#f2a470] backdrop-opacity-60   ' : ''} hover:text-white font-medium relative group`}
              >
                {item.name}
              </Link>
            ))}

          </div>

         
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
