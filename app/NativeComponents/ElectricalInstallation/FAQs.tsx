"use client";
import TalkToExperts from "@/app/ui/TalkToExperts";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question:
        "What should I consider when choosing an electrical installation service provider?",
      answer:
        "When selecting an electrical installation service provider, consider their experience, credentials, reputation, and adherence to safety standards. It's essential to verify their licenses, certifications, and memberships in professional organizations to ensure they meet industry standards. Reviewing past projects and client testimonials can also provide insight into their reliability and quality of work.",
    },
    {
      question:
        "What is the process for getting a new electricity connection in Kenya?",
      answer:
        "To obtain a new electricity connection in Kenya, you need to apply to Kenya Power (KPLC). The process involves submitting necessary documents, such as identification and property ownership proof, and paying the required fees. Once the application is processed, KPLC will conduct a site survey and proceed with the installation.",
    },
    {
      question: "How long does the electrical installation process take?",
      answer:
        "The duration of the electrical installation process varies depending on the project's complexity and scale. For standard residential installations, it typically takes a few days to a week. However, larger commercial or industrial projects may require more time due to their complexity.",
    },
    {
      question:
        "What safety measures should a reputable electrical installation company follow?",
      answer:
        "A reputable electrical installation company should prioritize safety by adhering to industry best practices and local regulations. This includes conducting regular safety training for employees, using appropriate protective equipment, and having procedures in place to handle emergencies. Ensuring compliance with safety standards minimizes risks associated with electrical installations.",
    },
    {
      question: "Are there maintenance requirements after the installation?",
      answer:
        "Yes, regular maintenance is crucial to ensure the longevity and safety of electrical systems. It's advisable to schedule periodic inspections to identify and address potential issues before they escalate. Proper maintenance helps in preventing unexpected failures and ensures the system operates efficiently.",
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
            Find answers to common questions about Electrical installation
            services and ensure your safety and satisfaction
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
