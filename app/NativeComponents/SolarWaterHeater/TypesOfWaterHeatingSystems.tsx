import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
export default function TypesOfWaterHeatingSystems() {
  const systems = [
    {
      title: "Pressurized Systems",
      description:
        "Ideal for multi-story buildings and high-pressure applications",
      features: [
        "Works with high-pressure water supply",
        "Suitable for multi-story buildings",
        "Compatible with existing plumbing",
        "Higher initial cost but better performance",
      ],
      image: "/300-Liters-Megasun-Indirect-Flat-Plate-Collector.webp",
      alt: "A 300-liter-megasun  pressurized solar water heater",
    },

    {
      title: "Non-Pressurized Systems",
      description:
        "Perfect for single-story homes and areas with lower water pressure",
      features: [
        "Cost-effective solution",
        "Easy maintenance",
        "Gravity-fed operation",
        "Ideal for single-story buildings",
      ],
      image:
        "/A modern solar water heater, with high-efficiency evacuated tube collectors, is mounted on a contemporary house's sleek roof against a bright sunny sky. The image uses a flat design aesthetic with glo.webp",
      alt: "A modern solar water heater, with high-efficiency evacuated tube collectors, is mounted on a contemporary house's sleek roof against a bright sunny sky. The image uses a flat design aesthetic with glo.",
    },
  ];
  return (
    <section className="w-full bg-background py-5 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div className="text-textColor">
              <h2 className="headline font-bold text-foreground">
                Solar Water Heating Systems
              </h2>
            </div>
          </div>
          <h3 className="title font-medium">
            Choose the perfect solar water heating systems based on your
            specific needs and property type
          </h3>
        </header>
      </div>
      <div className="mt-10 wrapper">
        {/* Solar water Heating systems */}
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((system, index) => (
            <article key={index} className="overflow-hidden shadow-md">
              <figure className="h-64 relative">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  className="object-cover object-left"
                />
              </figure>
              <figcaption className="p-6 space-y-4">
                <h4 className="title font-semibold text-slate-900">
                  {system.title}
                </h4>
                <p className="text-slate-700 p-text">{system.description}</p>
                <ul className="space-y-2">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="size-5 text-[#6b8e51] mt-0.5 flex-shrink-0" />
                      <span className="label-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </article>
          ))}
        </div>
        {/* Call to Action Section */}
        <div className="mt-16 text-center flex flex-col items-center justify-center space-y-6">
          <h5 className="headline font-semibold text-primary">
            Not Sure Which System is Right for You?
          </h5>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Our experts will help you choose the perfect system based on your
            property type, water usage, and budget requirements.
          </p>
          <button
            type="button"
            className="bg-primary hover:bg-foreground text-textColor hover:text-white px-6 py-3 h-auto text-base rounded-md hover:cursor-pointer transition-all delay-300"
          >
            <Link href="/contact" className='flex items-center gap-2'>
              Get Expert Advice <ArrowRight className="ml-2 size-5" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
