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
    {
      title: "Products",
      href: "/products", // Clicking takes you to all products
      content: [
        {
          title: "Women",
          href: "/categories/women",
          description: "Shop Women's Fashion",
          subcategories: [
            { name: "Dresses", href: "/categories/women/dresses" },
            { name: "Tops", href: "/categories/women/tops" },
            { name: "Bottoms", href: "/categories/women/bottoms" },
            { name: "Outerwear", href: "/categories/women/outerwear" },
          ],
        },
        {
          title: "Men",
          href: "/categories/men",
          description: "Shop Men's Fashion",
          subcategories: [
            { name: "Shirts", href: "/categories/men/shirts" },
            { name: "Pants", href: "/categories/men/pants" },
            { name: "Outerwear", href: "/categories/men/outerwear" },
            { name: "Accessories", href: "/categories/men/accessories" },
          ],
        },
        {
          title: "New Arrivals",
          href: "/new-arrivals",
          description: "Latest additions to our collection",
          featured: true,
        },
        {
          title: "Sale",
          href: "/sale",
          description: "Special offers and discounts",
          featured: true,
        },
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
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
                    {item.content ? (
                      <>
                        <Link href={item.href}>
                          <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">
                            {item.title}
                          </NavigationMenuTrigger>
                        </Link>
                        <NavigationMenuContent>
                          <div className="p-6 w-[500px] grid grid-cols-2 gap-4">
                            {item.content.map((category) => (
                              <div key={category.title} className="space-y-3">
                                <Link href={category.href}>
                                  <div className="group">
                                    <h3 className="text-base font-medium text-gray-900 group-hover:text-primary">
                                      {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                      {category.description}
                                    </p>
                                  </div>
                                </Link>
                                {category.subcategories && (
                                  <ul className="space-y-2">
                                    {category.subcategories.map((sub) => (
                                      <li key={sub.name}>
                                        <Link
                                          href={sub.href}
                                          className="text-sm text-gray-600 hover:text-gray-900"
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
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
                      <Link
                        href={item.href}
                        className="text-sm font-semibold text-gray-900 mb-2 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title} (All Products)
                      </Link>
                      <div className="pl-4 space-y-4 mt-2">
                        {item.content.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <Link
                              href={category.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block"
                            >
                              <div className="text-sm font-medium text-gray-700 hover:text-gray-900">
                                {category.title}
                              </div>
                            </Link>
                            {category.subcategories && (
                              <div className="pl-3 space-y-1">
                                {category.subcategories.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-sm text-gray-600 hover:text-gray-900"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
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
