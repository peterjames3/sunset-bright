import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="wrapper mt-[5rem] md:mt-[10rem] py-8 md:flex gap-10 min-h-[40rem]">
      <section className="w-full px-0 md:px-2 md:w-1/2 pt-20 md:pt-32 h-full flex flex-col justify-center gap-5 mb-10 ">
        <header className=" text-4xl md:text-5xl font-semibold text-textColor ">
          <ul className="flex gap-[0.2rem] p-text mb-3 ">
            <li className="text-primary font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="font-semibold">&gt;</li>
            <li className="font-semibold">Electrical Design</li>
          </ul>
          <h2>
            Innovative & Reliable Electrical Design Services for any Industry
          </h2>
        </header>
        <p className="p-text">
          Optimize your energy consumption with our cutting-edge electrical
          design solutions. We specialize in delivering efficient, sustainable,
          and cost-effective systems for residential, commercial, and industrial
          projects, ensuring maximum performance and reduced energy costs.
        </p>
      </section>
      <div className=" w-full md:w-1/2 flex gap-4 ">
        <Image
          src="/electrical design img.png"
          alt="images of various electrical design for residential, commercial, and industrial
          projects"
          width={1200}
          height={900}
        />
      </div>
    </div>
  );
}
