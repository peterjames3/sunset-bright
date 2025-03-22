import Image from "next/image";
export default function SoftwareTools() {
  const softwareTools = [
    {
      src: "/autocad.jpeg",
      alt: "image of autocad electrical",
      name: "AutoCAD Electrical",
      description: "For precise schematics and circuit design",
    },
    {
      src: "/etap.png",
      alt: "logo of etap electrical design software",
      name: "ETAP",
      description:
        "Electrical Transient Analyzer Program for power system analysis",
    },
    {
      src: "/revit.jpeg",
      alt: "image of revit MEP software",
      name: "Revit MEP",
      description: "3D modeling and BIM integration",
    },
    {
      src: "/agi32.png",
      alt: "logo image of agi32 electrical design software",
      name: "Dialux & AGi32",
      description: "Lighting design simulations",
    },
    {
      src: "/skm.jpeg",
      alt: "logo image of skm electrical design software",
      name: "SKM PowerTools",
      description: "Short circuit and arc flash studies",
    },
  ];

  return (
    <section className="w-full bg-background py-8 min-h-[30rem]">
      <div className="wrapper px-4">
        <div className="text-center mb-5">
          <h3 className="headline font-bold text-foreground mb-4">
            Software & Tools We Use
          </h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-5"></div>
          <p className="p-text mx-auto font-semibold text-foreground/70">
            We leverage industry-leading software and tools to deliver accurate,
            efficient, and compliant electrical designs.
          </p>
        </div>
      </div>
      <div className="wrapper grid grid-cols-2  gap-3 sm:grid-cols-5 md:gap-6">
        {softwareTools.map((software, index) => (
          <div key={index} className="flex flex-col gap-2 rounded-sm min-h-50">
            <figure className="w-full p-3 h-3/4 mb-3">
              <Image
                src={software.src}
                alt={software.alt}
                width={200}
                height={100}
                className="object-fit  "
              />
            </figure>
            <article className="text-center h-1/4 pt-2">
              <h4 className="p-text font-semibold text-textColor">
                {software.name}
              </h4>
              <p className="label-text text-textColor/40">
                {software.description}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
