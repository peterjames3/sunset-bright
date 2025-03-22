import Image from "next/image";
export default function Certifications() {
  const certifications = [
    {
      title: "UL 61010-1",
      description:
        "Safety requirements for electrical equipment for measuring, control and laboratory use",
    },
    {
      title: "ANSI C12.20 Class 0.2",
      description:
        "High-accuracy electrical metering standards for precise measurements",
    },
    {
      title: "IEC 62053-22/23",
      description:
        "International standards for static metering precision and performance",
    },
    {
      title: "ISO 50001",
      description:
        "Energy management systems standard for continuous improvement",
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
            {certifications.map((certification, index) => (
              <article key={index} className="flex  flex-col  gap-3">
                <h5 className="title font-semibold text-background">
                  {certification.title}
                </h5>
                <p className="p-text text-background/70">
                  {certification.description}
                </p>
              </article>
            ))}
          </div>
        </section>
        <figure className="w-full md:w-1/2 rounded-md oveflow-hidden ">
          <Image
            src="/POWER MONITORING AND METERING (4).png"
            alt="POWER MONITORING AND METERING"
            height={1000}
            width={1200}
            className="object-cover rounded-md"
          />
        </figure>
      </div>
    </div>
  );
}
