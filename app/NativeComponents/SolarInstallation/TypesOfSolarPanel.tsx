import { CircleCheck, X } from "lucide-react";
export default function TypesOfSolarPanel() {
  const solarPanels = [
    {
      name: "Monocrystalline",
      efficiency: "15-22%",
      pros: [
        "Highest efficiency rate",
        "Sleek, black appearance",
        "Space-efficient design",
      ],
      cons: ["Higher cost"],
    },
    {
      name: "Polycrystalline",
      efficiency: "13-17%",
      pros: ["More affordable", "Good performance ratio"],
      cons: ["Lower efficiency than mono", "Blue, speckled appearance"],
    },
    {
      name: "Thin-Film",
      efficiency: "10-13%",
      pros: ["Flexible installation options", "Better in high temperatures"],
      cons: ["Lower efficiency rate", "Requires more space"],
    },
  ];

  return (
    <section className="w-full bg-background py-8 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-foreground">
                Maximize your Solar Installation with The Right Solar Panel
              </h3>
            </div>
          </div>
          <h4 className="title  font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Understand the different types of solar panels and their benefits
            can helps make an informed decision for your property.
          </h4>
        </header>
      </div>

      <div className="wrapper grid md:grid-cols-3 gap-6 mt-6">
        {solarPanels.map((panel, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-700">{panel.name}</h3>
            <p className="text-sm text-gray-600">
              Efficiency: {panel.efficiency}
            </p>
            <div className="mt-3">
              {panel.pros.map((pro, idx) => (
                <p
                  key={idx}
                  className="text-textColor/70 flex items-center p-text"
                >
                  <CircleCheck className="text-primary pr-2 text-2xl" /> {pro}
                </p>
              ))}
              {panel.cons.map((con, idx) => (
                <p key={idx} className="text-error flex items-center p-text">
                  <X className="text-error pr-2 text-2xl" /> {con}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
