"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [
    {
      title: "Products",
      content: [
        { title: "Men's Collection", href: "#" },
        { title: "Women's Collection", href: "#" },
        { title: "Accessories", href: "#" },
      ],
    },
    {
      title: "Resources",
      content: [
        { title: "Size Guide", href: "#" },
        { title: "Care Instructions", href: "#" },
        { title: "Sustainability", href: "#" },
      ],
    },
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Support", href: "/support" },
  ];
  return (
    <div>
      {" "}
      <nav className="border-b shadow-md fixed top-0 left-0 right-0 bg-white z-10 p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">BLANK</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavigationMenu className="mr-4">
                <NavigationMenuList className="space-x-2">
                  {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.content ? (
                        <>
                          <NavigationMenuTrigger>
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="p-4 w-[200px]">
                              {item.content.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block p-2 hover:bg-slate-100 rounded-md"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-sm font-medium text-gray-700 hover:text-gray-900 px-2"
                        >
                          {item.title}
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <Link href={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.title} className="py-2">
                  {item.content ? (
                    <>
                      <span className="text-sm font-medium text-gray-700 block px-3 py-2">
                        {item.title}
                      </span>
                      <div className="pl-4">
                        {item.content.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="text-sm text-gray-600 hover:text-gray-900 block px-3 py-2"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 block px-3 py-2"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Link href={"/login"}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
