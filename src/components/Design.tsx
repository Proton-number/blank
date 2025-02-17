"use client";

import React from "react";
import { motion } from "motion/react";
import { PenTool, Shield, Shirt, Zap } from "lucide-react";

function Design() {
  const philosophyPoints = [
    {
      icon: PenTool,
      title: "Brand Precision",
      description:
        "Perfect reproduction of your brand elements through high-precision digital printing and embroidery techniques that ensure logo clarity and color accuracy.",
    },
    {
      icon: Shirt,
      title: "Apparel Selection",
      description:
        "Carefully curated selection of premium blank apparel that serves as the perfect canvas for your brand, from classic tees to professional polos.",
    },
    {
      icon: Shield,
      title: "Print Durability",
      description:
        "Advanced printing techniques and quality materials ensure your branded designs remain vibrant and intact through repeated wear and washing.",
    },
    {
      icon: Zap,
      title: "Design Flexibility",
      description:
        "Versatile customization options that adapt to different brand requirements, from small logo placement to full garment prints.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.h2
                  className="text-4xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Our Design Approach
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We understand that your brand is unique, and our design
                  process reflects that. Our expertise in custom apparel
                  printing ensures your brand identity is perfectly translated
                  onto every garment, maintaining consistency and quality across
                  all products.
                </motion.p>
              </div>

              <div className="grid gap-8 mt-12">
                {philosophyPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <point.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative hidden md:block"
            >
              <div className="relative w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/90 to-gray-100/50">
                  {/* You can replace this div with an actual image of your printing process or design work */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Add your design process image here
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Design;
