import { Cable, Waypoints, GitPullRequestClosed } from "lucide-react";
export default function PowerMeteringSol() {
  const solutions = [
    {
      icon: <Cable />,
      title: "Single-Point Power Metering",
      description:
        "Ideal for small-scale facilities and specific loads like HVAC systems, industrial machines, and data centers.",

      features: [
        "High-accuracy measurement (Class 0.2)",
        "Real-time monitoring",
        "Low initial cost",
        "Supports various power sources",
      ],
      useCase: "Small businesses, data centers and facility managers.",
    },
    {
      icon: <Waypoints />,
      title: "Multi-Point Power Metering",
      description:
        "Perfect for large buildings, industrial plants, and mixed-use developments requiring comprehensive monitoring.",

      features: [
        "Up to 48 circuits monitoring",
        "Multiple protocol support",
        "Smart alarm systems",
        "Historical data logging",
      ],
      useCase: "Commercial buildings, hospitals and commercial buildings",
    },
    {
      icon: <GitPullRequestClosed />,
      title: "Enclosed Power Metering",
      description:
        "Pre-integrated, secure solutions designed for maximum safety and ease installation.",

      features: [
        "Pre-wired & factory-tested",
        "UL & IEC certified",
        "Wireless enabled",
        "Compact design",
      ],
      useCase: "retrofitting projects and power distribution",
    },
  ];
  return (
    <section className="w-full bg-foreground py-8">
      <header className="wrapper px-4">
        <div className="text-center mb-6">
          <h2 className="headline font-bold text-background mb-4">
            Our Power Monitoring & Metering Solutions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="title mx-auto font-semibold text-background/70">
            Comprehensive power monitoring solutions designed to meet your
            specific need, from single-point measurements to complex
            multi-circuit systems.
          </p>
        </div>
      </header>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-10">
        {solutions.map((solution, index) => (
          <article
            key={index}
            className=" py-6 px-6 sm:px-8 md:px-10 rounded-lg border border-primary/40 "
          >
            <nav className="text-primary mb-3 size-16 bg-FooterBg p-3 rounded-full flex items-center justify-center text-center">
              {solution.icon}
            </nav>
            <h5 className="title font-semibold mb-3 text-background">
              {solution.title}
            </h5>
            <p className="p-text mb-3 text-background/90">
              {solution.description}
            </p>
            <div className="text-primary mb-3 font-semibold p-text">
              Key Features:
            </div>
            <ul className="list-disc mb-3 p-text ml-4 text-background/80">
              {solution.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="p-text font-semibold mt-2 text-primary">Use Case:</p>
            <p className="p-text text-background/80">{solution.useCase}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
