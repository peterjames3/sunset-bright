import { Check, Calendar } from "lucide-react";
import Assessment from "@/app/ui/Assessment";

const benefits = [
  {
    title: "Cost Effective",
    description:
      "Easy to install and operate, with no fuel or electricity bills",
  },
  {
    title: "Eco-friendly",
    description:
      "Zero emissions and renewable energy source, reducing carbon footprint",
  },
  {
    title: "Reliable",
    description: "Long lifespan, reducing the need for frequent replacements",
  },
  {
    title: "Minimal maintenance",
    description:
      "Minimal maintenance requirements, reducing downtime and repair costs",
  },
];
export default function BenefitsOfSolarWaterPump() {
  return (
    <section className="wrapper px-4 py-12">
      <h4 className="title font-bold mb-8">
        Benefits of Switching to Solar Power in Kenya
      </h4>
      <p className="p-text text-foreground mb-4 ">
        Solar water pumping systems provide numerous benefits, making them a
        smart investment for homeowners, farmers, ranchers, and other businesses
        that rely on water pumping. These systems use solar energy to power
        water pumps, reducing reliance on grid electricity and fossil fuels.
        Other benefits include:
      </p>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 rounded-full p-1 bg-primary">
              <Check className="size-4 text-tertiary-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Investment Range */}
      <div className="text-center mb-16">
        <h2 className="headline font-bold mb-4">
          Investment Range for Solar Water Pumping Solutions in Kenya
        </h2>
        <p className=" p-text text-gray-600 mb-4">
          The cost of transitioning to solar water pump solution varies,
          typically ranging from:
        </p>
        <p className="headline font-bold mb-4">
          Can be a low-cost solar water pump that costs kes 15,000, and or a
          borehole solar water pump as much as kes 1,500,000
        </p>
        <p className="p-text text-gray-600">
          The final price depends on the size of the system and specific
          requirements.
        </p>
      </div>

      {/* Timeline and CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="bg-primary rounded-full py-3 px-6 flex items-center gap-2 p-text font-semibold text-foreground">
          <Calendar className="w-5 h-5" />
          <span>
            Average Timeline: 1-3 weeks from consultation to completion
          </span>
        </div>
        <Assessment />
      </div>
    </section>
  );
}
