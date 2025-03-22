import Image from "next/image";
import { Star, ArrowRight, PhoneForwarded } from "lucide-react";
export default function AlarmSystems() {
  const benefits = [
    {
      src: "/Burglar1.webp",
      alt: "elcectric fence installation",
      title: "Wireless Alarm Systems",
      description:
        "Ideal for homes and businesses, offering flexible installation without extensive wiring.",
    },
    {
      src: "/burglar.webp",
      alt: "house equiped with alarm systems",
      title: "Burglar ALarm Systems",
      description:
        "Detects unauthorized entry and activates sirens or silent alerts for immediate response.",
    },
    {
      src: "/motion 1.webp",
      alt: "cctv installation",
      title: "Motion Detector Alarms",
      description:
        "Detects movement using infrared sensors and triggers an alert for  unauthorized activity.",
    },
    {
      src: "/A high-resolution stock photo of a cluster of CCTV cameras dome, bullet, and PTZ with a blurred bokeh effect. The cameras, primarily white and black, are sharply in focus, creating a soft background and professional commerci.jpg",
      alt: "cctv installation",
      title: "CCTV Monitoring Alarms",
      description:
        "Provides real-time surveillance with high-resolution cameras, even in low-light conditions.",
    },
  ];
  return (
    <section className="w-full bg-background py-8">
      <header className=" wrapper text-center flex flex-col items-center justify-center mb-6">
        <div className=" w-32 mb-2 rounded-md flex gap-2  items-center justify-center text-background font-semibold p-text bg-primary py-1 px-2">
          <Star /> Quality
        </div>
        <h2 className="headline font-bold text-foreground mb-4">
          Comprehensive Alarm System Solutions We Offer at SunsetBright Energy
          Limited
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="p-text mx-auto font-semibold text-foreground/70">
          Our security installation services are designed to protect your
          property, businesses and loved ones with advanced alarm systems
          tailored to your specific needs. We offer a range of alarm solutions
          to ensure complete security and instant alerts in case of threats or
          emergencies.
        </p>
      </header>
      <div className="wrapper mt-5 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-5 md:gap-8">
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
      {/* Timeline and CTA */}
      <div className="mt-10 wrapper flex flex-col md:flex-row  justify-center items-center gap-6">
        <div className="bg-primary rounded-full py-3 px-6 flex items-center gap-2 p-text font-semibold text-foreground">
          <span>Contact us today for expert alarm installation</span>
          <ArrowRight className="size-5" />
        </div>
        <a
          href="tel:+254716783432"
          className="bg-primary rounded-full py-3 px-6 flex items-center gap-2 p-text font-semibold text-foreground"
        >
          <PhoneForwarded className="size-5" />
          <span>+254 716 783432</span>
        </a>
      </div>
    </section>
  );
}
