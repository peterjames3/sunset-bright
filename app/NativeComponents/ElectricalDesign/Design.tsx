import Image from "next/image";
export default function Design() {
  const electricalDesigns = [
    {
      title: "Power distribution design",
      description:
        "Design an efficient power distribution system to ensure reliable electricity flow across your premises, enhancing safety, performance, and energy efficiency.",
    },
    {
      title: "Lighting design",
      description:
        "Ensure optimal illumination with a well-planned lighting design that enhances visibility, efficiency, and aesthetics.",
    },
    {
      title: "Surveillance system design",
      description:
        "Implement a robust surveillance system with strategically positioned HD cameras for full-scale monitoring and enhanced security.",
    },
    {
      title: "Backup power sizing",
      description:
        "Determine the ideal backup power capacity to ensure uninterrupted electricity supply during outages.",
    },
  ];
  return (
    <div className="w-full bg-foreground py-8">
      <div className="wrapper flex flex-col md:flex-row gap-10">
        <section className="w-full md:w-1/2">
          <header className="wrapper flex flex-col justify-center gap-3">
            <div className="flex items-center gap-4">
              <div className="h-16 w-[3px] bg-primary"></div>
              <div>
                <h3 className="headline font-bold text-background">
                  Industry Standards & <br /> Certifications
                </h3>
              </div>
            </div>
            <h4 className="p-text font-medium bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
              Our power monitoring systems comply with the highest industry
              standards to ensure reliability, accuracy and safety.
            </h4>
          </header>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2  gap-4 px-5 md:px-0">
            {electricalDesigns.map((electricalDesign, index) => (
              <article key={index} className="flex  flex-col  gap-3">
                <h5 className="p-text font-semibold text-background">
                  {electricalDesign.title}
                </h5>
                <p className="label-text text-background/70">
                  {electricalDesign.description}
                </p>
              </article>
            ))}
          </div>
        </section>
        <figure className="w-full md:w-1/2 rounded-md oveflow-hidden h-full  ">
          <Image
            src="/Low angle perspective, high-resolution stock photo, commercial quality A professional electrical wiring diagram for a residential building, showcasing lighting circuits, power outlets, switches, distr.webp"
            alt="Low angle perspective, high-resolution stock photo, commercial quality A professional electrical wiring diagram for a residential building, showcasing lighting circuits, power outlets, switches"
            height={900}
            width={900}
            className="object-cover rounded-md"
          />
        </figure>
      </div>
    </div>
  );
}
