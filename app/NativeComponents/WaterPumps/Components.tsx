import SolarCarousel from "@/app/ui/SolarCarousel";
export default function Components() {
  const carouselImages = [
    {
      src: "/a well ventilated inverter.webp",
      alt: "a well ventilated slots and mounting bracket invater",
    },
    {
      src: "/550w-mono.-DCRA3TKS.webp",
      alt: "550w-mono solar panel",
    },
    {
      src: "/black metallic pump, silver solar panels.webp",
      alt: "Solar water pump components",
    },
    {
      src: "/High-quality digital rendering, dramatic cinematic style Soft pastel colors, bright lens flare. Sleek stainless steel submersible pump with blue label and reflective black solar panels. Black power ca.webp",
      alt: "A solar water pump",
    },
    {
      src: "/A highly detailed, 3D-rendered image of a solar-powered water pump system. G The stainless steel pump and blue hose are illuminated by soft, natural light. The solar panel's.webp",
      alt: "modern solar water heater on a contemporary house roof",
    },
    {
      src: "/solar-powered water pump system in rural Kenya.jpg",
      alt: "solar-powered water pump system in rural Kenya",
    },
  ];

  const keyComponents = [
    "Solar PV panels for energy generation",
    "Controller/inverter for power management",
    "Electric motor and pump mechanism",
    "Optional battery storage system",
  ];
  return (
    <section className="w-full bg-foreground py-5 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-background">
                Key Components of Solar Water Pump Systems
              </h3>
            </div>
          </div>
          <h4 className="title  font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
            Discover the essential components of a solar water pump system,
            design to meet the unique needs of the Kenyan market
          </h4>
        </header>
      </div>
      <div className="wrapper flex flex-col-reverse md:flex-row  gap-4 md:gap-8 min-h-[35rem]">
        <div className="w-full md:w-2/5  flex flex-col pt-8  md:pt-18 ">
          <p className="text-background p-text">
            A
            <span className="font-semibold text-primary px-1.5">
              {" "}
              solar water pump
            </span>
            is an innovative system that harnesses solar energy to pump water
            for various applications. These systems use photovoltaic (PV) panels
            to convert sunlight into electrical energy which then powers a motor
            to drive the pump mechanism.
          </p>
          <h4 className="text-lg font-semibold mt-6 text-background">
            The systems consist of several key components:
          </h4>
          <div className=" my-3 flex gap-5 w-full items-center justify-center md:justify-start">
            <ul className="mt-4 space-y-2">
              {keyComponents.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-background/80"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-background p-text font-semibold mt-4">
            Our systems are built to provide reliable, cost-effective, and
            sustainable solutions for irrigation, livestock, and clean water
            supply.
          </p>
        </div>
        <div className="w-full md:w-3/5 h-full">
          <SolarCarousel
            images={carouselImages}
            autoPlayInterval={5000}
            backgroundColor="#e0eae4"
          />
        </div>
      </div>
    </section>
  );
}
