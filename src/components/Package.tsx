"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Recycle,
  Minimize,
  RefreshCw,
  Leaf,
  Box,
  TreeDeciduous,
} from "lucide-react";

function Package() {
  const packages = [
    {
      title: "Recyclable Materials",
      description:
        "Our packaging is made from 100% recyclable and biodegradable materials, sourced from sustainable suppliers and certified eco-friendly producers.",
      icon: Recycle,
      stats: "100% recyclable",
      features: ["Plant-based inks", "Recycled paper", "Zero plastic"],
    },
    {
      title: "Minimal Waste",
      description:
        "We've optimized our packaging dimensions and materials to minimize waste, reducing our carbon footprint while maintaining product protection.",
      icon: Minimize,
      stats: "30% less material",
      features: ["Right-sized boxes", "No excess fillers", "Compact design"],
    },
    {
      title: "Reusable Design",
      description:
        "Every package is thoughtfully designed to serve multiple purposes, extending its lifecycle beyond just product delivery.",
      icon: RefreshCw,
      stats: "2+ uses per box",
      features: ["Storage solution", "Gift packaging", "Organizing tool"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      <section className="py-24">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="flex justify-center mb-4">
              <Box className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sustainable Packaging
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to reducing our environmental impact through
              innovative and eco-friendly packaging solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="text-center mb-6">
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <pkg.icon className="w-12 h-12 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {pkg.title}
                  </h3>
                  <div className="text-green-600 font-semibold mb-4">
                    {pkg.stats}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                    >
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-16 text-center" variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 text-green-600">
              <TreeDeciduous className="w-5 h-5" />
              <span>Committed to environmental sustainability</span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Package;
