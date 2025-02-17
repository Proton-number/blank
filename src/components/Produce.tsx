"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Printer, Sparkles, Clock } from "lucide-react";

const MotionCard = motion(Card);

function Produce() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  const cards = [
    {
      title: "Premium Printing",
      description:
        "Using state-of-the-art digital printing technology, we ensure your logos and designs are crisp, vibrant, and long-lasting on any fabric.",
      icon: Printer,
      color: "text-blue-600",
    },
    {
      title: "Quality Materials",
      description:
        "We work with top-grade apparel brands to provide the perfect canvas for your designs, from soft cotton tees to durable hoodies.",
      icon: Sparkles,
      color: "text-amber-600",
    },
    {
      title: "Quick Turnaround",
      description:
        "Fast and efficient production process means your custom branded apparel is ready when you need it, without compromising on quality.",
      icon: Clock,
      color: "text-green-600",
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900">Our Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              Transforming your brand into wearable art
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <MotionCard
                key={index}
                className="p-8 hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <CardContent className="space-y-6">
                  <motion.div
                    className="flex justify-center"
                    variants={iconVariants}
                  >
                    <card.icon className={`w-12 h-12 ${card.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-center mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </MotionCard>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Produce;
