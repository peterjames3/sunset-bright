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
            <li className="font-semibold">Electrical Installation</li>
          </ul>
          <h2>Expert Electrical Installation Services You Can Trust</h2>
        </header>
        <p className="p-text">
          At the forefront of electrical solutions in Kenya, we prioritize
          safety and reliability in every project. Our skilled electricians are
          dedicated to delivering high-quality installations tailored to your
          needs.
        </p>
      </section>
      <div className=" w-full md:w-1/2 flex gap-4 ">
        <Image
          src="/Electrical installation.png"
          alt="images of various electrical installation for residential, commercial, and industrial
          projects"
          width={1200}
          height={900}
        />
      </div>
    </div>
  );
}
