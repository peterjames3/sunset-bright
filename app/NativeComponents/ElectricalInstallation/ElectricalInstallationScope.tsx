import Image from "next/image";
import {
  Repeat2,
  ShieldPlus,
  UserRoundCheck,
  Clock9,
  Star,
} from "lucide-react";
import Assessment from "@/app/ui/Assessment";
export default function ElectricalInstallationScope() {
  const scope = [
    {
      icon: <Repeat2 />,
      title: "Our Process",
      description:
        "We assess your needs and design a tailored solution for your electrical installation  requirements.",
    },
    {
      icon: <ShieldPlus />,
      title: "Safety First",
      description:
        "Our team adheres to strict safety protocols to ensure reliable and  secure installations.",
    },
    {
      icon: <UserRoundCheck />,
      title: "Expert Consultation",
      description:
        "We provide expert advice to help you choose the best electrical solutions for your needs.",
    },
    {
      icon: <Clock9 />,
      title: "Timely Execution",
      description:
        "Our skilled electricians complete projects efficiently, minimizing disruption to your daily operations.",
    },
  ];
  return (
    <section className="w-full bg-foreground py-8">
      <header className="text-center flex flex-col items-center justify-center mb-6">
        <div className=" w-32 mb-2 rounded-md flex gap-2  items-center justify-center text-background font-semibold p-text bg-primary py-1 px-2">
          <Star /> Quality
        </div>
        <h2 className="headline font-bold text-background mb-4">
          Delivering Excellence in Electrical Services
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="p-text mx-auto font-semibold text-background/70">
          Quality electrical work is essential for safety and efficiency. our
          process ensures that every installation meets the highest standards.
        </p>
      </header>
      <div className=" mt-10 grid grid-cols-1  md:grid-cols-3 gap-2 md:gap-6 wrapper">
        <div className="flex flex-col gap-10 md:justify-between ">
          {scope.slice(0, 2).map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-center justify-center gap-3 rounded-md p-3 border border-banner"
            >
              <div className="flex items-center gap-2 text-primary">
                {item.icon}
              </div>
              <h3 className="text-background font-semibold">{item.title}</h3>

              <p className="text-center text-background/50">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div>
          <Image
            src="/High angle classic black and white photograph of a technician performing PAT testing on a power strip. Test results, certification tags, and a safety checklist are visible. Timeless and elegant style,.webp"
            alt="Overhead bird’s-eye view, distinct split layout. A professional electrical wiring diagram for residential building variations, displaying lighting circuits, outlets, switches, distribution boards"
            width={1200}
            height={1000}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 md:justify-between  ">
          {scope.slice(2, 4).map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-center justify-center gap-3 rounded-md p-3 border border-banner"
            >
              <div className="flex items-center gap-2 text-primary">
                {item.icon}
              </div>
              <h3 className="text-background font-semibold">{item.title}</h3>

              <p className="text-center text-background/50">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-5  w-full flex justify-center">
        <Assessment />
      </div>
    </section>
  );
}
