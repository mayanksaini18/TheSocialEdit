"use client"
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question: "What industries has The Social Edit worked with in the past?",
    answer:
      "The Social Edit has helped fashion brands, boosted e-commerce businesses, and created impactful solutions for SaaS and tech startups. With experience across multiple domains, we deliver results that matter.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "It depends on the strategy. PPC and paid ads can show results in days, while SEO and content marketing typically compound over 3-6 months for long-term growth.",
  },
  {
    question: "What are the benefits of hiring a digital marketing services in Bangalore?",
    answer:
      "You get access to a tech-savvy talent pool, cost-effective scaling, and a team that understands both local culture and global standards.",
  },
  {
    question: "Why should businesses choose The Social Edit as their agency?",
    answer:
      "We don't just sell hype. We combine creative storytelling with hard data metrics to ensure your brand actually converts, not just looks good.",
  },
  {
    question: "Why is The Social Edit considered the best digital marketing company?",
    answer:
      "Because we treat your budget like our own. Our 'Data-First' approach minimizes waste and maximizes ROI.",
  },
];

const FaqSection = () => {
  // State to track which FAQ is open. null means all are closed.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" rounded-b-4xl bg-black py-24 px-4 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <h2 className="mb-12 text-center text-4xl font-normal tracking-tight md:text-5xl">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`
                group cursor-pointer rounded-2xl border bg-[#0A0A0A] px-6 py-6 transition-all duration-300
                ${openIndex === index ? "border-neutral-700" : "border-neutral-800 hover:border-neutral-700"}
              `}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between">
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? "text-neutral-200" : "text-white"}`}>
                  {index + 1}. {item.question}
                </span>
                
                {/* Icons */}
                <div className="ml-4 shrink-0">
                  {openIndex === index ? (
                    <X className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
                  )}
                </div>
              </div>

              {/* Answer Row (Conditional Render) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-neutral-400">
                  <span className="font-medium text-yellow-500">The Social Edit</span>{" "}
                  {item.answer.replace("The Social Edit", "")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;