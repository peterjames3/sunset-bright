import Image from "next/image";
export default function Benefits() {
  const benefits = [
    {
      src: "/Rich burgundy and deep blue dynamic motion blur depicting a high-security electric fence with sharp razor wire spirals mounted on a concrete wall. Multiple strands of electrified wire run parallel, su.webp",
      alt: "elcectric fence installation",
      title: "Enhanced Your with Our Electric Fence Solutions",
      description:
        "Our electric fences act as a strong deterrent against intruders",
    },
    {
      src: "/Blurred bokeh effect, unusual original fine art warm photography with slight darkness, soft professional style, sharp subject focus and soft background. Modern house with red rotating alarm light, ele.webp",
      alt: "house equiped with alarm systems",
      title: "Reliable Alarm Systems for ultimate Protection",
      description:
        "Our alarm systems offer immediate alerts, ensuring quick response to threats.",
    },
    {
      src: "/A high-resolution stock photo of a cluster of CCTV cameras dome, bullet, and PTZ with a blurred bokeh effect. The cameras, primarily white and black, are sharply in focus, creating a soft background and professional commerci.jpg",
      alt: "cctv installation",
      title: "Security Solutions Tailored to your need(CCTV)",
      description:
        "We provide customized security solutions to fit your specific requirements.",
    },
  ];
  return (
    <section className="w-full bg-background py-8">
      <header className="wrapper flex flex-col sm:flex-row gap-5">
        <div className=" w-full md:w-1/2 flex items-center gap-4">
          <div className="h-20 sm:h-28 lg:h-20 w-[4px] bg-primary"></div>
          <div>
            <h3 className="headline font-bold text-foreground">
              Discover the Top Benefits of <br /> Our Security Installation
              Services
            </h3>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="p-text font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our CCTV systems provide 24/7 surveillance, ensuring that your
            properties are monitored at all times. With high-resolution cameras
            and remote access. You can keep an eye on your premises from
            anywhere. Experience peace of mind knowing that your safety is our
            priority.
          </h4>
        </div>
      </header>
      <div className="wrapper mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-md overflow-hidden h-[22rem] "
          >
            <figure className="h-1/2 overflow-hidden">
              <Image
                src={benefit.src}
                alt={benefit.alt}
                width={330}
                height={220}
                className="object-fill"
              />
            </figure>
            <article className="space-y-2 h-1/2  px-2 ">
              <h4 className=" title font-semibold text-textColor">
                {benefit.title}
              </h4>
              <p className="p-text text-foreground/70">{benefit.description}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
