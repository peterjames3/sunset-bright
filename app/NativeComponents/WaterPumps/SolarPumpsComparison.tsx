import { CircleCheck, X } from "lucide-react";
export default function SolarPumpsComparison() {
  const pumps = [
    {
      type: "DC (Direct Current) Pumps",
      advantages: [
        "More efficient as they use solar power directly",
        "Lower initial costs",
        "Simple design with fewer components",
        "Ideal for smaller applications",
      ],
      disadvantages: ["Limited to lower power applications"],
    },
    {
      type: "AC (Alternating Current) Pumps",
      advantages: [
        "Suitable for high-power applications",
        "Can be used with existing AC pump systems",
        "Wide range of pump options available",
      ],
      disadvantages: [
        "Requires an inverter (additional cost)",
        "Lower overall system efficiency",
      ],
    },
  ];

  return (
    <section className="bg-foreground py-8 w-full">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-background">
                DC vs AC Solar Water Pumps
              </h3>
            </div>
          </div>
          <h4 className="title  font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
            Understanding the key differences in efficiency, power requirements,
            and application of DC and AC solar water pumps.
          </h4>
        </header>
      </div>

      <div className=" wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
        {pumps.map((pump, index) => (
          <div key={index} className="bg-banner p-6 rounded-lg shadow-md">
            <h5 className="text-background title font-semibold mb-4">
              {pump.type}
            </h5>
            <ul className="space-y-2">
              {pump.advantages.map((advantage, i) => (
                <li key={i} className="flex items-center ">
                  <CircleCheck className="text-primary" />{" "}
                  <span className="ml-2 text-background">{advantage}</span>
                </li>
              ))}
              {pump.disadvantages.map((disadvantage, i) => (
                <li key={i} className="flex items-center text-error/80">
                  <X className="text-error/80" />{" "}
                  <span className="ml-2">{disadvantage}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
