"use client";

import React from "react";
import { motion } from "motion/react";

import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Shirt,
  Users,
  FileText,
  Printer,
  Clock,
  HelpCircle,
} from "lucide-react";

function Footer() {
  const links = {
    products: [
      { name: "T-Shirts & Polos", icon: Shirt },
      { name: "Hoodies & Sweaters", icon: Shirt },
      { name: "Corporate Wear", icon: Shirt },
      { name: "Accessories", icon: Shirt },
    ],
    services: [
      { name: "Digital Printing", icon: Printer },
      { name: "Screen Printing", icon: Printer },
      { name: "Embroidery", icon: Printer },
      { name: "Design Services", icon: FileText },
    ],
    company: [
      { name: "About Us", icon: Users },
      { name: "How It Works", icon: Clock },
      { name: "FAQ", icon: HelpCircle },
      { name: "Contact", icon: Mail },
    ],
    contact: [
      { text: "sales@printco.com", icon: Mail },
      { text: "123 Print Avenue, NY", icon: MapPin },
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
            <h3 className="text-2xl font-bold mb-6">Blank</h3>
            <p className="text-gray-500 mb-6">
              Your trusted partner for custom apparel printing and brand
              merchandising. Quality products, exceptional service, fast
              turnaround.
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
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              {links.products.map((item, index) => (
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
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {links.services.map((item, index) => (
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

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    className="text-gray-500 hover:text-gray-900 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Blank. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
