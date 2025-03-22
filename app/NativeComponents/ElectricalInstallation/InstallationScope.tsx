"use client";
import { StickyScroll } from "@/app/ui/StickyScroll";
import Image from "next/image";
const content = [
  {
    title: "Residential Electrical Installation",
    description:
      "At SunsetBright Energy Limited, we specialize in residential electrical installations, renovations, and maintenance. Our certified electricians ensure safe and efficient wiring, lighting, and power solutions for homes. We arrive on time, fully equipped with PPE, and ready to deliver reliable services tailored to your household needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Residential Electrical Installation
      </div>
    ),
  },
  {
    title: "Industrial Electrical Installation",
    description:
      "We provide expert industrial electrical solutions, including high-voltage systems, machinery wiring, and power distribution for factories, warehouses, and manufacturing plants. Our team ensures compliance with industry standards while optimizing safety and efficiency in your industrial operations.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/electrical inspector in safety gear conducting an electrical audit..webp"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="Industrial Electrical Installation"
        />
      </div>
    ),
  },
  {
    title: "Commercial Electrical Installation",
    description:
      "From office buildings to retail stores, we design and install commercial electrical systems that ensure energy efficiency, reliability, and safety. Our services include lighting, wiring, power distribution, and backup power solutions to keep businesses running smoothly.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/An overhead, dramatically lit shot of a Black electrician in safety gear meticulously inspecting a home's electrical system. He uses a multimeter at a power outlet and checks a clipboard checklist. Th.webp"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="Commercial Electrical Installation"
        />
      </div>
    ),
  },
  {
    title: "Emergency & Maintenance Services",
    description:
      "We offer 24/7 emergency electrical services and routine maintenance to prevent unexpected failures. Whether it’s a power outage, system fault, or regular inspections, our team is always ready to provide fast and reliable solutions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/an electrical inspector in safety gear conducting an electrical audit in a large meter box.webp"
          width={600}
          height={400}
          className="h-full w-full object-cover"
          alt="an electrical inspector in safety gear conducting an electrical audit in a large meter box"
        />
      </div>
    ),
  },
];

export default function InstallationScope() {
  return (
    <div className="w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
