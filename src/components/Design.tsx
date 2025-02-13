"use client";

import React from "react";
import { motion } from "motion/react";

import { Clock, Layers, Palette, Compass } from "lucide-react";

function Design() {
  const philosophyPoints = [
    {
      icon: Clock,
      title: "Timeless Aesthetics",
      description:
        "Creating pieces that transcend seasonal trends and remain relevant for years to come through careful consideration of form and function.",
    },
    {
      icon: Layers,
      title: "Functional Details",
      description:
        "Every element serves a purpose in comfort and style, ensuring our pieces are as practical as they are beautiful.",
    },
    {
      icon: Palette,
      title: "Considered Materials",
      description:
        "Selecting premium fabrics and materials that enhance both the aesthetic appeal and longevity of each piece.",
    },
    {
      icon: Compass,
      title: "Versatile Design",
      description:
        "Engineering each piece to adapt seamlessly across different settings and styling combinations.",
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
                  Our Design Philosophy
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We believe in the power of minimalist design to create
                  versatile pieces that stand the test of time. Each garment is
                  thoughtfully crafted to blend seamlessly into your wardrobe
                  while maintaining its unique character.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Design;
