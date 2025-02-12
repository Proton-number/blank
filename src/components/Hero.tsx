"use client";

import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-center bg-fixed">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={staggerChildren}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen"
      >
        <div className="mt-20 md:mt-10 space-y-10">
          <motion.div variants={fadeUpVariants} className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 text-white/90 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
            >
              New Collection Available
            </motion.span>
            <motion.h1
              className="text-6xl md:text-8xl font-semibold text-white leading-tight"
              variants={fadeUpVariants}
            >
              Redefining style, empowering confidence.
            </motion.h1>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl"
          >
            We craft designs that make you look and feel your best, combining
            timeless elegance with modern innovation.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4"
          >
            <Button
              className="group relative h-12 rounded-xl text-xl bg-white text-black hover:bg-white/90 transition-colors duration-300"
              variant="outline"
            >
              <motion.span
                className="relative flex items-center font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Get started{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.span>
            </Button>
            <Button
              variant="ghost"
              className="text-white text-xl h-12 rounded-xl hover:bg-white/10 hover:text-white transition-colors duration-300 backdrop-blur-sm"
            >
              Learn more
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className=" flex-col items-center  space-y-2 hidden md:flex"
          >
            <span className="text-white/80 text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-white/80" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
