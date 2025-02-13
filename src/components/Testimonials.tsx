"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content:
      "This product has completely transformed how we work. The efficiency gains have been remarkable.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 2,
    content:
      "The best investment we've made this year. Customer satisfaction has increased by 40%.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 3,
    content:
      "Intuitive, powerful, and reliable. Everything you need in a modern solution.",
    author: "Emma Williams",
    role: "Director of Operations, StartupX",
    avatar: "/api/placeholder/40/40",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white">
              <CardContent className="pt-6">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <p className="text-xl leading-relaxed text-gray-700 mb-6">
                  {testimonials[currentIndex].content}
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
