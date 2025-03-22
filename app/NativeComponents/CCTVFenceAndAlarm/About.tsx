import SolarCarousel from "@/app/ui/SolarCarousel";
export default function About() {
  const carouselImages = [
    {
      src: "/electric fence.jpeg",
      alt: "electric  fence",
    },
    {
      src: "/A high-resolution stock photo of a cluster of CCTV cameras dome, bullet, and PTZ with a blurred bokeh effect. The cameras, primarily white and black, are sharply in focus, creating a soft background and professional commerci.jpg",
      alt: "A high-resolution stock photo of a cluster of CCTV cameras dome, bullet, and PTZ with a blurred bokeh effect. The cameras, primarily white and black, are sharply in focus, creating a soft background and professional",
    },

    {
      src: "/Rich burgundy and deep blue dynamic motion blur depicting a high-security electric fence with sharp razor wire spirals mounted on a concrete wall. Multiple strands of electrified wire run parallel, su.webp",
      alt: "Technician installing solar panels",
    },
    {
      src: "/Precise architectural color photograph, intense dramatic lighting, high contrast, sharp lines, detailed structures, wide angles, modern house with high-tech security system, red rotating alarm light, .webp",
      alt: "modern solar water heater on a contemporary house roof",
    },
    {
      src: "/Precise architectural color photography in warm terracotta and cool teal showcasing a tall security pole with multiple sleek, modern CCTV cameras against a clear blue sky. Cameras feature visible lens.webp",
      alt: "cctv-Installation-Services-In-Kenya",
    },
    {
      src: "/Surreal infrared tones highlight a red rotating security alarm light on a modern house under a partly cloudy sky. Strong contrasts and deep shadows are present. The alarm’s glossy red cover reflects.webp",
      alt: "an image of   modern house with alarm systems installed",
    },
  ];

  const services = [
    {
      title: "CCTV Installation",
      description:
        "Monitor your premises with high-defination cameras for complete surveillance and security.",
    },
    {
      title: "Electric Fence",
      description:
        "Protect your property with reliable and effective electric fencing solutions.",
    },
    {
      title: "Alarm Installation",
      description:
        "Enhance your security with our reliable alarm systems, designed to detect and alert you to any unauthorized access or emergencies in real time.",
    },
  ];
  return (
    <section className="w-full bg-foreground py-5 min-h-[18rem]">
      <div className="wrapper flex flex-col-reverse md:flex-row  gap-4 md:gap-8 min-h-[35rem]">
        <section className="w-full md:w-1/2">
          <header className="wrapper flex flex-col justify-center gap-3">
            <div className="flex items-center gap-4">
              <div className="h-28 w-[3px] bg-primary"></div>
              <div>
                <h3 className="headline font-bold text-background">
                  Secure Your Property with Our Comprehensive Security Solutions
                </h3>
              </div>
            </div>
            <h4 className="p-text font-medium bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
              We specialize in cutting-edge security installations tailored to
              your needs. Our services include:
            </h4>
          </header>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2  gap-4 px-5 md:px-0">
            {services.map((service, index) => (
              <article key={index} className="flex  flex-col  gap-3">
                <h5 className="title font-semibold text-background">
                  {service.title}
                </h5>
                <p className="p-text text-background/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>
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
