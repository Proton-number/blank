"use client";

import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Upload, User } from "lucide-react";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-gray-200 py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold">BLANK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Link href="/services/upload">
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Upload className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-3 max-h-[80vh] overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.title} className="py-2">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Link href="/services/upload" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <Upload className="h-4 w-4" />
                    <span>Submit Design</span>
                  </Button>
                </Link>
                <Link href="/dashboard" className="w-full">
                  <Button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <User className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
