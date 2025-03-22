"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sun,
  Battery,
  Cpu,
  Cable,
  LineChart,
  Maximize2,
  ChevronDown,
  ChevronUp,
  MoveUpRight,
} from "lucide-react";
export default function Maintenance() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Sun className="size-8 text-primary" />,
      title: "Solar Panel Cleaning",
      description:
        "Professional cleaning service to remove dust, bird droppings, and debris that reduce panel efficiency. Regular cleaning can increase energy output by up to 30%.",
      details: [
        "Specialized cleaning solutions safe for solar panels",
        "Scheduled cleaning based on local weather patterns",
        "Inspection for potential damage during cleaning",
        "Performance measurement before and after cleaning",
      ],
    },
    {
      icon: <Battery className="size-8 text-primary" />,
      title: "Battery Health Check & Replacement",
      description:
        "Comprehensive battery diagnostics and maintenance to ensure reliable energy storage. We monitor battery life and replace when necessary for uninterrupted power supply.",
      details: [
        "Deep cycle battery testing",
        "Capacity analysis and reporting",
        "Preventive maintenance schedule",
        "Battery lifetime optimization advice",
      ],
    },
    {
      icon: <Cpu className="size-8 text-primary" />,
      title: "Inverter Inspection & Repair",
      description:
        "Expert diagnosis and repair of inverter systems. We ensure your power conversion remains efficient and reliable throughout the system's lifetime.",
      details: [
        "Efficiency testing and optimization",
        "Firmware updates when available",
        "Thermal imaging inspection",
        "Performance data analysis",
      ],
    },
    {
      icon: <Cable className="size-8 text-primary" />,
      title: "Wiring & Connection Checks",
      description:
        "Thorough inspection of all electrical connections to prevent energy loss and ensure system safety. We identify and fix potential hazards before they become problems.",
      details: [
        "Complete circuit testing",
        "Connection point thermal scanning",
        "Corrosion prevention treatment",
        "Safety compliance verification",
      ],
    },
    {
      icon: <LineChart className="size-8 text-primary" />,
      title: "System Performance Optimization",
      description:
        "Comprehensive system analysis and optimization to maximize your solar power output. We fine-tune your system for Kenya's unique climate conditions.",
      details: [
        "Real-time performance monitoring",
        "Seasonal adjustment optimization",
        "Shading analysis",
        "Energy production reporting",
      ],
    },
    {
      icon: <Maximize2 className="size-8 text-primary" />,
      title: "System Expansion & Upgrades",
      description:
        "Scale your solar system to meet your growing energy needs. We assess your current usage and recommend optimal expansion solutions.",
      details: [
        "Capacity expansion assessment",
        "Latest technology integration",
        "Smart system upgrades",
        "Future-proofing recommendations",
      ],
    },
  ];
  return (
    <section className="w-full bg-background py-8">
      <div className="wrapper">
        <div className="mb-12 text-center">
          <h2 className="mb-4 headline font-bold text-foreground ">
            Maximize Your Solar Investment with our Maintenance services package
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground p-text font-medium">
            Regular maintenance is crucial for your solar system&apos;s
            longevity and performance. In Kenya&apos;s unique climate, proper
            upkeep can increase system efficiency by up to 25%, reduce
            unexpected breakdowns, and save you money in the long run. Our
            comprehensive maintenance services ensure your system operates at
            peak efficiency year-round.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg bg-background/70 p-6 transition-all duration-300 hover:shadow-lg"
              onClick={() =>
                setExpandedService(expandedService === index ? null : index)
              }
            >
              <div className="flex items-start justify-between">
                <div className="mb-4 text-tertiary">{service.icon}</div>
                {expandedService === index ? (
                  <ChevronUp className="size-5 text-primary" />
                ) : (
                  <ChevronDown className="size-5 text-primary" />
                )}
              </div>
              <h3 className="mb-2 title font-semibold text-textColor">
                {service.title}
              </h3>
              <p className="mb-4 p-text text-textColor/70">
                {service.description}
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedService === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mt-4 space-y-2 border-t pt-4">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-foreground/60"
                    >
                      <div className="bg-gren-700 mr-2 size-2 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link href="/contact">
            <button
              type="button"
              className=" flex gap-2 items-center rounded-md bg-primary px-8 py-4 font-semibold text-white transition-colors duration-300 hover:bg-foreground hover:cursor-pointer"
            >
              Schedule Maintenance
              <MoveUpRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
