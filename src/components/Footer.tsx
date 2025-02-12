"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Users,
  Heart,
} from "lucide-react";

function Footer() {
  const links = {
    shop: [
      { name: "Men's Collection", icon: ShoppingBag },
      { name: "Women's Collection", icon: ShoppingBag },
      { name: "Accessories", icon: ShoppingBag },
      { name: "New Arrivals", icon: Heart },
    ],
    company: [
      { name: "About Us", icon: Users },
      { name: "Sustainability", icon: Heart },
      { name: "Careers", icon: Users },
      { name: "Contact", icon: Mail },
    ],
    social: [
      { name: "Instagram", icon: Instagram },
      { name: "Twitter", icon: Twitter },
      { name: "Facebook", icon: Facebook },
    ],
    contact: [
      { text: "hello@blank.com", icon: Mail },
      { text: "123 Fashion St, NY", icon: MapPin },
      { text: "+1 (555) 123-4567", icon: Phone },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="bg-white border-t border-gray-100 text-gray-800 py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">BLANK</h3>
            <p className="text-gray-500 mb-6">
              Redefining minimalist fashion through sustainable practices and
              timeless designs.
            </p>
            <div className="space-y-4">
              {links.contact.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-4">
              {links.shop.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {links.company.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="grid grid-cols-2 gap-4">
              {links.social.map((item, index) => (
                <motion.a
                  key={index}
                  className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} BLANK. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
