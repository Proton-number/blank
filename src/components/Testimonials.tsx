"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah J.",
      role: "Fashion Blogger",
      content:
        "BLANK's minimalist designs have completely transformed my wardrobe. The quality is unmatched.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Creative Director",
      content:
        "Their attention to detail and sustainable practices make BLANK stand out in the fashion industry.",
      rating: 5,
    },
    {
      name: "Emma L.",
      role: "Entrepreneur",
      content:
        "The versatility of BLANK's pieces makes them perfect for both work and casual occasions.",
      rating: 5,
    },
  ];
  return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="relative">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <p className="text-lg text-gray-600 text-center mb-4">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="text-center">
                  <p className="font-semibold">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Testimonials;
