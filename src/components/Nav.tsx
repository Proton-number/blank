"use client";

import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Products",
      content: [
        {
          title: "Men's Collection",
          href: "#",
          description: "Latest styles for men",
        },
        {
          title: "Women's Collection",
          href: "#",
          description: "Trending women's fashion",
        },
        { title: "Accessories", href: "#", description: "Complete your look" },
        {
          title: "New Arrivals",
          href: "#",
          description: "Fresh drops and latest releases",
        },
      ],
    },
    {
      title: "Resources",
      content: [
        {
          title: "Size Guide",
          href: "#",
          description: "Find your perfect fit",
        },
        {
          title: "Care Instructions",
          href: "#",
          description: "Keep your items looking new",
        },
        {
          title: "Sustainability",
          href: "#",
          description: "Our eco-friendly initiatives",
        },
        { title: "FAQ", href: "#", description: "Common questions answered" },
      ],
    },
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Support", href: "/support" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b border-gray-200 py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold">BLANK</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.content ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="p-6 w-[400px] grid gap-3">
                            {item.content.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                <div className="font-medium text-gray-900">
                                  {subItem.title}
                                </div>
                                {subItem.description && (
                                  <div className="text-sm text-gray-500 mt-1">
                                    {subItem.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Link href="/login">
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
                  {item.content ? (
                    <>
                      <div className="text-sm font-semibold text-gray-900 mb-2">
                        {item.title}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.content.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block"
                          >
                            <div className="text-sm text-gray-700 hover:text-gray-900">
                              {subItem.title}
                            </div>
                            {subItem.description && (
                              <div className="text-xs text-gray-500 mt-1">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      href={item.href}
                      className="block text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart</span>
                </Button>
                <Link href="/login" className="w-full">
                  <Button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
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
