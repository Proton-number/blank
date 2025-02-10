import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  const faqs = [
    {
      question: "What materials do you use?",
      answer:
        "We use premium, sustainable materials including organic cotton, recycled polyester, and ethically sourced wool. All our fabrics are certified for quality and environmental standards.",
    },
    {
      question: "How do I care for my BLANK clothing?",
      answer:
        "Most BLANK items can be machine washed cold and laid flat to dry. Each piece comes with specific care instructions to ensure longevity.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all unworn items with original tags. Free returns are available in all major markets.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping times and costs vary by location.",
    },
  ];
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default Faq;
