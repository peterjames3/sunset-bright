import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function Fence() {
  const benefits = [
    {
      title: "Intruder Detection & Instant Alerts",
    },
    {
      title: "Smart Integration",
    },
    {
      title: "Affordable & Scalable Solutons",
    },
    {
      title: "Custom Solutions",
    },
  ];
  return (
    <div className="w-full bg-foreground">
      <div className=" w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <article className="space-y-4 py-4">
          <h3 className=" text-background headline font-semibold">
            Alarm Systems Installation Services in Kenya
          </h3>
          <p className="text-background/80">
            Looking for reliable alarm system installation services in Nairobi,
            Kenya? We specialize in commercial and residential alarm systems
            designed to protect businesses and homes from theft, unauthorized
            access, and emergencies. Our advanced security alarm solutions
            provide instant alerts and 24/7 monitoring, ensuring maximum
            protection for your property.
          </p>
          <p className="text-2xl font-semibold text-background">
            Why Choose Our Solution
          </p>
          <ul className=" text-background/80">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-2 items-center mb-2 ">
                <CircleCheck className="text-primary" />
                {benefit.title}
              </li>
            ))}
          </ul>
        </article>
        <figure className=" rounded-lg overflow-hidden">
          <Image
            src="/Precise architectural color photograph, intense dramatic lighting, high contrast, sharp lines, detailed structures, wide angles, modern house with high-tech security system, red rotating alarm light, .webp"
            alt="alarm system"
            width={1200}
            height={900}
            className="object-cover"
          />
        </figure>
      </div>
    </div>
  );
}
