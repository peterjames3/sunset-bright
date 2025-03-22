import Image from "next/image";
import { Home, School, Factory, Dessert } from "lucide-react";
import Assessment from "@/app/ui/Assessment";
export default function ElectricalDesignScope() {
  const scope = [
    {
      icon: <Home />,
      title: "Residential",
      description:
        "Custom home wiring, smart home integration and energy-efficient solutions",
    },
    {
      icon: <School />,
      title: "Commercial",
      description:
        "Office buildings, retail spaces and commercial faciity electrical systems",
    },
    {
      icon: <Factory />,
      title: "Industrial",
      description:
        "Manufacturing plants, power distribution and industrial control systems",
    },
    {
      icon: <Dessert />,
      title: "Custom",
      description:
        "Data centers, renewable energy systems and specialized facilities",
    },
  ];
  return (
    <section className="w-full bg-foreground py-8">
      <header className="text-center mb-6">
        <h2 className="headline font-bold text-background mb-4">
          Our Electrical Design Services Covers all Scope
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="p-text mx-auto font-semibold text-background/70">
          Find the perfect solar water heating system for your needs and budget
        </p>
      </header>
      <div className=" mt-10 grid grid-cols-1  md:grid-cols-3 gap-2 md:gap-6 wrapper">
        <div className="flex flex-col gap-10 md:justify-between md:gap-0">
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
            src="/Overhead bird’s-eye view, distinct split layout. A professional electrical wiring diagram for residential building variations, displaying lighting circuits, outlets, switches, distribution boards, a.webp"
            alt="Overhead bird’s-eye view, distinct split layout. A professional electrical wiring diagram for residential building variations, displaying lighting circuits, outlets, switches, distribution boards"
            width={1200}
            height={900}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 md:justify-between md:gap-0">
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
