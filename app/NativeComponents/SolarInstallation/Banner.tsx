import Image from "next/image";
import { Phone, Mail } from "lucide-react";
export default function Banner() {
  return (
    <div className="w-full relative min-h-[30rem] overflow-hidden">
      <Image
        src="/An ethereal depiction of a Kenyan industrial facility with a solar-powered water pumping system. Solar panels power a pump transferring water from a borehole to storage tanks. Workers in safety gear a.webp"
        alt="a professional electrical wiring diagram for residential buildings"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
      <div className="absolute top-1/2 left-1/2 transition -translate-y-1/2 -translate-x-1/2 wrapper flex flex-col items-center  gap-6 justify-center   text-center text-3xl z-20">
        <h6 className="headline font-semibold text-background">
          Ready to <span>Switch</span> to Solar or in need of solar{" "}
          <span>Maintenance?</span>
        </h6>
        <p className="p-text text-background/90">
          Contact us now for a free quote and consultation <br />
          tailored to your needs.
        </p>
        <div>
          <address className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 p-text font-semibold  rounded-lg bg-background px-8 py-3 text-foreground transition-colors hover:bg-gray-100">
              <Phone className="size-5" />
              <a href="tel:+254 716 783432">+254 716 783432</a>{" "}
            </button>
            <button className="flex items-center p-text font-semibold gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10">
              <Mail className="size-5" />
              <a href="mailto:sunsetbrightenergylimited@gmail.com">
                sunsetbrightenergylimited@gmail.com
              </a>
            </button>
          </address>
        </div>
      </div>
    </div>
  );
}
