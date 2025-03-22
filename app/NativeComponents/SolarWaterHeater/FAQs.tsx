'use client'
import TalkToExperts from '@/app/ui/TalkToExperts';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQs(){
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "How long does installation take?",
      answer:
        "Typical installation takes 1-2 days for residential systems, depending on the system size and complexity. We'll provide a specific timeline during the initial consultation.",
    },
    {
      question: "Do solar water heaters work in cloudy weather?",
      answer:
        "Yes, solar water heaters can still collect heat on cloudy days, though less efficiently. Our systems include backup heating to ensure you always have hot water, regardless of weather conditions.",
    },
    {
      question: "What maintenance is required?",
      answer:
        "Solar water heaters require minimal maintenance. We recommend an annual inspection to check the system's performance and clean the collectors. Most systems last 15-20 years with proper maintenance.",
    },
    {
      question: "How much will I save on my energy bills?",
      answer:
        "Most households save 50-70% on their water heating costs. The exact savings depend on your hot water usage, current energy costs, and system size.",
    },
    {
      question: "Are there any government incentives available?",
      answer:
        "Yes, there are various incentives available depending on your location. Our team will help you identify and apply for all eligible rebates and tax incentives.",
    },
  ];

  return (
    <section className='w-full py-10 bg-background'>
      <div className='flex flex-col sm:flex-row gap-10 wrapper '>
        <article className="w-full sm:w-1/3 flex flex-col gap-3 ">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-foreground">
                FAQs{" "}
              </h3>
            </div>
          </div>
          <p className="p-text font-semibold text-textColor/90 ">
            {" "}
            Find answers to common questions about solar water heater installation services and ensure your safety and satisfaction
          </p>
          <p className='label-text font-medium text-tertiary-white/60'>Do you have a specific question?</p>
          <div className='mt-3'>
            <TalkToExperts />
          </div>        
        </article>
        <aside className='w-full sm:w-2/3'>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg ${openIndex === index ? "bg-white shadow-lg" : "bg-white hover:bg-gray-50"}`}
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
  )
}
