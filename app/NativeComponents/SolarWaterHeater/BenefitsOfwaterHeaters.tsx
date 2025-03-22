export default function BenefitsOfWaterHeaters() {
  const benefits = [
    {
      title: "Significant Cost Savings",
      description:
        "Reduce your water heating bills by up to 70% annually with free solar energy",
    },
    {
      title: "Reliable Performance",
      description:
        "Get hot water even on cloudy days with our efficient solar collection system",
    },
    {
      title: "Low Maintenance",
      description:
        "Our solar water heaters require minimal maintenance and are designed to last for decades",
    },
    {
      title: "Environmentally Friendly",
      description:
        "We prioritize environmental sustainability by using eco-friendly materials and practices",
    },
    {
      title: "Quick Installation",
      description:
        "Professional installation completed within 1-2 days in most case",
    },
    {
      title: "Year-Round Operation",
      description:
        "Effective performance in all seasons with backup heating integration",
    },
  ];
  return (
    <section className="w-full bg-foreground py-8">
      <header className="wrapper flex flex-col gap-3">
        <div className="flex items-center gap-4  ">
          <div className="h-6 w-[2px] bg-primary"></div>
          <div>
            <h2 className="headline font-bold text-background">
              Benefits of Solar Water Heating{" "}
            </h2>
          </div>
        </div>
        <h3 className="title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
          {" "}
          Discover why thousands of homeowners are switching to solar water
          heating
        </h3>
      </header>
      <div className="mt-10 wrapper grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
        {benefits.map((benefit, i) => (
          <article
            key={i}
            className="flex flex-col gap-2 rounded-md   p-3 "
          >
            <h4 className="font-semibold text-primary">{benefit.title}</h4>
            <p className="text-background/50">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
