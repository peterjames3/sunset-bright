//import Image from "next/image";
import { Activity, ChartNoAxesCombined, Blocks } from "lucide-react";
import Link from "next/link";
export default function PowerMeteringHero() {
  const analytics = [
    {
      id: 1,
      icon: <Activity />,
      title: "Real-Time Monitoring",
      description:
        "Instant insights into power consumption and system performance",
    },
    {
      id: 2,
      icon: <ChartNoAxesCombined />,
      title: "Data Analytics",
      description:
        "Real-time monitoring of power consumption and energy efficiency",
    },
    {
      id: 3,
      icon: <Blocks />,
      title: "Smart Integration",
      description:
        "Seamless integration with existing building management systems",
    },
    {
      id: 4,
      title: "Data Analytics",
      description: "Advanced analytics for optimization and cost reducation",
    },
  ];
  return (
    <div className="wrapper mt-[5rem] md:mt-[10rem] py-8 md:flex gap-10 min-h-[40rem]">
      <section className="w-full px-0 md:px-2 md:w-1/2 pt-20 md:pt-32 h-full flex flex-col justify-center gap-5 mb-10 ">
        <header className=" text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-center sm:text-start ">
          <ul className="flex gap-[0.2rem] p-text mb-3 ">
            <li className="text-primary font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="font-semibold">&gt;</li>
            <li className="font-semibold">Power Metering Services</li>
          </ul>
          <h2>
            Accurate & Smart Power Metering Solutions for Maximum Efficiency
          </h2>
        </header>
        <p className="p-text">
          Elevating power monitoring to a new level infinite scalability, unique
          versatility and unrivaled intelligence.
        </p>
      </section>
      <div className=" w-full md:w-1/2 flex gap-4 items-center ">
        <div className=" grid grid-row-6 gap-4">
          {analytics.slice(0, 2).map((analytic) => (
            <article
              key={analytic.id}
              className="rounded-md row-span-3  p-3 text-background bg-FooterBg"
            >
              <nav className="text-primary size-10">{analytic.icon}</nav>
              <h5 className="title font-semibold mb-2 ">{analytic.title}</h5>
              <p className="p-text ">{analytic.description}</p>
            </article>
          ))}
        </div>
        <div className="grid grid-row-2 gap-4 ">
          {analytics.slice(2, 4).map((analytic) => (
            <article
              key={analytic.id}
              className={`rounded-md row-span-3 flex flex-col gap-2 p-3 text-background ${
                analytic.id === 4 ? "bg-banner" : "bg-FooterBg"
              } `}
            >
              {analytic.icon && (
                <nav className="text-primary size-10">{analytic.icon}</nav>
              )}

              <h5 className="title font-semibold mb-2 ">{analytic.title}</h5>
              <p className="p-text ">{analytic.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
