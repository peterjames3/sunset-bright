"use client";
import TalkToExperts from "@/app/ui/TalkToExperts";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "How much does solar panel installation cost in Kenya?",
      answer:
        "The cost of solar panel installation in Kenya varies based on system size, panel quality, and installation complexity. On average, it ranges from KES 50,000 to KES 999,000.",
    },
    {
      question: "What do you need for solar installation?",
      answer:
        "To install a solar system, you need solar panels, an inverter, batteries (for off-grid systems), charge controllers, and proper mounting structures.",
    },
    {
      question: "How many solar panels do I require?",
      answer:
        "The number of panels required depends on your energy consumption. A household using 300 kWh per month may need around 5-10 solar panels.",
    },
    {
      question: "What maintenance do solar panels require?",
      answer:
        "Solar panels require minimal maintenance, mainly cleaning to remove dust and debris, and periodic inspections for optimal performance.",
    },
    {
      question: "How many solar panels for a 5kVA inverter?",
      answer:
        "A 5kVA inverter typically requires 12-20 solar panels, depending on panel wattage and efficiency.",
    },
    {
      question: "How to calculate solar load?",
      answer:
        "To calculate solar load, sum up the wattage of all appliances you intend to power and determine the daily energy consumption in kWh.",
    },
  ];

  return (
    <section className="w-full py-10 bg-background">
      <div className="flex flex-col sm:flex-row gap-10 wrapper ">
        <article className="w-full sm:w-1/3 flex flex-col gap-3 ">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-foreground">FAQs </h3>
            </div>
          </div>
          <p className="p-text font-semibold text-textColor/90 ">
            {" "}
            Find answers to common questions about solar installation and
            maintenance services.
          </p>
          <p className="label-text font-medium text-tertiary-white/60">
            Do you have a specific question?
          </p>
          <div className="mt-3">
            <TalkToExperts />
          </div>
        </article>
        <aside className="w-full sm:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg ${
                  openIndex === index
                    ? "bg-white shadow-lg"
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="size-5 text-primary" />
                  ) : (
                    <ChevronDown className="size-5 text-tertiary" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
