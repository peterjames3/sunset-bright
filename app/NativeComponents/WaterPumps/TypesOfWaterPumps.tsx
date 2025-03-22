import Image from "next/image";
import { CircleCheck } from "lucide-react";
export default function TypesOfWaterpumps() {
  const pumps = [
    {
      title: "Submersible Pumps",
      description:
        "Designed to be installed underwater, ideal for deep wells and boreholes. These pumps can reach depths of up to 650 feet and are perfect for high-volume water requirements.",
      imageUrl:
        "/A highly detailed, 3D-rendered image of a solar-powered water pump system. G The stainless steel pump and blue hose are illuminated by soft, natural light. The solar panel's.webp",
      benefits: [
        "Excellent for deep well applications",
        "Higher efficiency due to pushing rather than pulling water",
        "Quiet operation as the pump is underwater",
        "Requires professional installation",
      ],
    },
    {
      title: "Surface Pumps",
      description:
        "Installed at ground level, suitable for moving water from surface water sources like ponds, streams, and shallow wells. Effective for irrigation and domestic water supply.",
      imageUrl:
        "/A highly detailed 3D render of a solar-powered water pump system with a soft pastel color palette and eerie atmosphere. Green metal frame, black metallic pump. Two silver solar panels. Dry, dusty grou.webp",
      benefits: [
        "Easy installation and maintenance",
        "Ideal for shallow water sources",
        "Cost-effective for surface water applications",
        "Good for irrigation systems",
      ],
    },
  ];
  return (
    <section className="w-full bg-background py-5 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h2 className="headline font-bold text-foreground">
                Why Choose Us{" "}
              </h2>
            </div>
          </div>
          <h3 className="title font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {" "}
            Power your home or business with expert solar, electrical, and
            security solutions trusted by thousands
          </h3>
        </header>
      </div>
      <div className="wrapper  grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
        {pumps.map((pump, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 rounded-md overflow-hidden "
          >
            <Image
              src={pump.imageUrl}
              alt={pump.title}
              width={550}
              height={150}
              className="object-cover"
            />
            <div className="p-3 space-y-4">
              <h4 className=" title font-semibold text-foreground">
                {pump.title}
              </h4>
              <p className="p-text text-textColor/80">{pump.description}</p>
              <ul className="space-y-3">
                {pump.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className=" p-text flex items-center  gap-3 text-textColor/70"
                  >
                    {" "}
                    <CircleCheck className="text-primary font-semibold" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
