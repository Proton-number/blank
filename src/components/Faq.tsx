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
      question: "What types of apparel can you customize?",
      answer:
        "We offer customization on a wide range of apparel including t-shirts, hoodies, polo shirts, sweatshirts, caps, and corporate wear. All our blank apparel is sourced from premium brands to ensure quality and durability.",
    },
    {
      question: "What printing methods do you use?",
      answer:
        "We use various printing techniques including digital printing, screen printing, and embroidery. The best method is chosen based on your design, apparel type, and quantity to ensure optimal results and durability.",
    },
    {
      question: "What file formats do you accept for logos?",
      answer:
        "For best results, we accept vector files (.ai, .eps, .pdf) or high-resolution images (.png, .jpg) at 300 DPI or higher. We can help convert your existing logo to the appropriate format if needed.",
    },
    {
      question: "What are your minimum order quantities?",
      answer:
        "Our minimum order quantity varies by printing method. Digital printing allows for small runs starting at 10 pieces, while screen printing typically requires a minimum of 25 pieces for cost-effectiveness.",
    },
    {
      question: "How long does the production process take?",
      answer:
        "Standard production time is 7-10 business days from design approval. Rush orders may be available for an additional fee. Large orders may require additional time.",
    },
    {
      question: "Do you offer design assistance?",
      answer:
        "Yes, our design team can help optimize your logo for printing, suggest placement options, and provide virtual mockups before production. We can also assist with color matching to your brand standards.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Since all items are custom-made to order, we cannot accept returns unless there's a production defect. We do offer a satisfaction guarantee and will work to resolve any quality issues.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary by location. All orders include tracking information, and we offer express shipping options for urgent orders.",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}

export default Faq;
