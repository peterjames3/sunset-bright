import { CircleCheck } from "lucide-react";
import Image from "next/image";
export default function UseCases() {
  const useCases = [
    {
      title: "Agricultural Irrigation",
      description:
        "Perfect for irrigating crops, greenhouses, and orchards. Provides reliable water supply during peak growing seasons.",
      benefits: [
        "Supports up to 15 acres of land",
        "Ideal for drip irrigation systems",
      ],
      image:
        "/Chiaroscuro lighting, natural earth tones. Rural Kenyan landscape featuring solar-powered water pump system. Solar panels gleam under bright sun. Pump draws water into storage tank irrigating a lush g.webp",
    },
    {
      title: "Residential Use",
      description:
        "Ideal for homes in Kenya, especially in remote areas or as a backup system for a reliable water source.",
      benefits: [
        "Supplies water for 4-6 person household",
        "Garden and lawn irrigation",
      ],
      image: "/High-angle view of a home with solar panels at sunset.webp",
    },
    {
      title: "Community Systems",
      description:
        "Provides Kenyan communities with reliable water supply systems, reducing the need to fetch water over long distances.",
      benefits: [
        "Serves up to 1000 people",
        "Community wells and distribution",
      ],
      image: "/Warm golden.jpg",
    },
    {
      title: "Livestock Watering",
      description:
        "Ensures consistent water supply for livestock and dairy operation, especially in arid and semi-arid region.",
      benefits: ["Supports up to 500 livestock", "Automatic watering systems"],
      image:
        "/Strong hard light, high angle perspective. Realistic detailed depiction of livestock drinking from a solar-powered water pump in a rural Kenyan setting. Glistening solar panels power the pump drawing .webp",
    },
    {
      title: "Industrial Applications",
      description:
        "Powers industrial processes and cooling systems with sustainable integration.",
      benefits: ["Process water circulation", "Cooling system integration"],
      image:
        "/An ethereal depiction of a Kenyan industrial facility with a solar-powered water pumping system. Solar panels power a pump transferring water from a borehole to storage tanks. Workers in safety gear a.webp",
    },
  ];
  return (
    <section className="bg-foreground py-8 w-full">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-background">
                Use Cases of Solar Water Pumps
              </h3>
            </div>
          </div>
          <h4 className="title  font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
            Solar water pumps are transforming the way water is accessed and
            utilized across Kenya. From agricultural irrigation to domestic
            water supply.
          </h4>
        </header>
      </div>

      <div className=" wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-cardBg rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={useCase.image}
              alt={useCase.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="title text-background font-semibold mb-2">
                {useCase.title}
              </h4>
              <p className="text-background/70 mb-4">{useCase.description}</p>
              <ul className="text-background/80 space-y-3">
                {useCase.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CircleCheck className="text-primary" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
