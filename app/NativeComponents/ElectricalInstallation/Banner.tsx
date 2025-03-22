import Image from "next/image";
import TalkToExperts from "@/app/ui/TalkToExperts";
export default function Banner() {
  return (
    <div className="w-full relative min-h-[30rem] overflow-hidden">
      <Image
        src="/An overhead, dramatically lit shot of a Black electrician in safety gear meticulously inspecting a home's electrical system. He uses a multimeter at a power outlet and checks a clipboard checklist. Th.webp"
        alt="diris_979_front"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
      <div className="absolute top-1/2 left-1/2 transition -translate-y-1/2 -translate-x-1/2 wrapper flex flex-col items-center  gap-6 justify-center   text-center text-3xl z-20">
        <h6 className="headline font-semibold text-background">
          Get Your Free Quote Today
        </h6>
        <p className="p-text text-background/90">
          Contact us now for reliable electrical installation services tailored
          to your needs in Kenya. <br />
          tailored to your needs.
        </p>
        <div>
          <TalkToExperts />
        </div>
      </div>
    </div>
  );
}
