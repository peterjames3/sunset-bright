import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function Fence() {
  const benefits = [
    {
      title: "Enhanced Security",
    },
    {
      title: "Affordable & Durable",
    },
    {
      title: "24/7 Monitoring & Remote Access",
    },
    {
      title: "Custom Solutions",
    },
  ];
  return (
    <div className="w-full bg-background">
      <div className=" w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <figure className=" rounded-lg overflow-hidden">
          <Image
            src="/Rich burgundy and deep blue blurred bokeh effect on a cast bronze surface depicting a high-security electric fence with sharp razor wire spirals mounted on a concrete wall. Multiple strands of electri.webp"
            alt="cctv"
            width={1200}
            height={900}
            className="object-cover"
          />
        </figure>
        <article className="space-y-4 py-4">
          <h3 className=" text-foreground headline font-semibold">
            Commercial Electric Fence Installation Services in Nairobi Kenya
          </h3>
          <p className="text-foreground/80">
            We have spent years perfecting perimeter security solutions and
            installing electric fences for commercial properties across Nairobi.
            Our electric fencing systems are designed to safeguard your
            premises, deter intruders, and enhance overall security, all while
            being tailored to your specific needs and budget. Our commercial
            electric fences provide peace of mind to business owners in Nairobi
            and surrounding areas by creating a strong first line of defense
            against unauthorized access. With advanced technology, our
            installations has a riple of benefits:
          </p>
          <ul className=" text-foreground/80">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-2 items-center mb-2 ">
                <CircleCheck className="text-primary" />
                {benefit.title}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
