import Image from "next/image";
import {
  PhoneIncoming,
  Sun,
  Clock10,
  ChartColumnIncreasing,
} from "lucide-react";
export default function InstallationServices() {
  const installationServices = [
    {
      title: "Residential Solar Installation",
      description:
        "Complete solar solutions for homes, designed to maximize energy independence and savings.",
      image:
        "/Overhead bird's-eye view shows a rich deep teal logo inspired by a realistic depiction of a rural Kenyan community benefiting from a solar water pump system. Solar panels gleam under sunlight, powerin.webp",

      features: [
        "Customized solar panel installation",
        "Energy-efficient solar panels",
        "Professional installation",
        "Warranty coverage",
      ],
    },
    {
      title: "Commercial Solar Installation",
      description:
        "Large-scale solar installations for businesses and industrial facilities.",
      image: "/commercial solar installation.jpeg",
      features: [
        "High-capacity systems",
        "Energy consumption analysis",
        "ROI optimization",
        "Business-specific solutions",
      ],
    },
    {
      title: "Solar Battery Storage",
      description:
        "Advanced energy storage solutions for continuous power supply.",
      image: "/RNG-BATT-AGM.-2sAviXaH.webp",
      features: [
        "High-capacity storage",
        "Battery system integration",
        "Power backup",
        "Flexibility in storage and disposal",
      ],
    },
    {
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance services to ensure optimal system performance.",
      image: "/A solar panel installation.webp",
      features: [
        "Professional maintenance and support",
        "System troubleshooting",
        "On-site inspection and maintenance",
        "Upkeep and repairs",
      ],
    },
  ];

  const chooseUs = [
    {
      icon: <Sun />,
      title: "Expert Installation teams",
    },
    {
      icon: <ChartColumnIncreasing />,
      title: "High-quality installation",
    },
    {
      icon: <Clock10 />,
      title: "Lifetime Support",
    },
  ];

  return (
    <section className="w-full bg-foreground py-8 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-background">
                Our solar Installation Services
              </h3>
            </div>
          </div>
          <h4 className="title  font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
            Discover our comprehensive range of solar services designed to meet
            your energy needs. From initial consultation to ongoing maintenance,
            we provide end-to-end solar solutions.
          </h4>
        </header>
      </div>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-12 min-h-[35rem]">
        {installationServices.map((service, index) => (
          <article
            key={index}
            className="flex  flex-col  gap-3 rounded-md overflow-hidden"
          >
            <div className="relative h-[15rem] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={200}
                className="object-cover"
              />
            </div>
            <h5 className="title font-semibold text-background">
              {service.title}
            </h5>
            <p className="p-text text-background/70">{service.description}</p>
            <ul className=" p-text list-disc list-inside p-4 text-background/70">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="mt-2">
              <a
                href="tel:+254716783432"
                className="ml-3 rounded-md  w-2/3 flex text-background  justify-center py-3 text-center items-center gap-4 bg-primary hover:cursor-pointer hover:bg-banner transition-all delay-300"
              >
                {" "}
                <PhoneIncoming />
                +254 716 783432 2
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="wrapper mt-12 ">
        <h5 className="mb-7 headline text-background font-semibold text-center">
          Why Choose our Services
        </h5>
        <div className="flex items-center justify-between">
          {chooseUs.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col items-center justify-center space-y-3 text-center"
            >
              <div className="text-primary text-2xl"> {item.icon}</div>

              <p className="p-text text-background/70 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
