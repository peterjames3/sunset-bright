import {
  File,
  Lightbulb,
  PencilRuler,
  Move3d,
  ShieldCheck,
  BookOpenCheck,
} from "lucide-react";

export default function Process() {
  const processes = [
    {
      icon: <File />,
      step: "Step 1",
      title: "Consultation & Requirements Gathering",
      description:
        "We start by understanding your specific needs, site conditions, and project goals to create a tailored approach.",
    },
    {
      icon: <Lightbulb />,
      step: "Step 2",
      title: "Conceptual Design & Load Calculations",
      description:
        "Our engineers conduct a detailed site survey and create a custom installation plan.",
    },
    {
      icon: <PencilRuler />,
      step: "Step 3",
      title: "Detailed Schematic & Circuit Design",
      description:
        "We create precise wiring diagrams and schematics that serve as the blueprint for your electrical systems.",
    },
    {
      icon: <Move3d />,
      step: "Step 4",
      title: "3D Modeling & Simulations",
      description:
        "Advanced simulations test your design for safety, efficiency, and potential issues before implementation.",
    },
    {
      icon: <ShieldCheck />,
      step: "Step 5",
      title: "Code Compliance & Approval",
      description:
        "We ensure all designs adhere to national and local electrical codes, preparing documentation for approval.",
    },
    {
      icon: <BookOpenCheck />,
      step: "Step 6",
      title: "Final Docunebtation & Support",
      description:
        "You'll receive complete docunentation including drawings, bill of material, and ongoing implemetation support .  ",
    },
  ];
  return (
    <section className="w-full bg-foreground py-8">
      <header className="wrapper flex flex-col gap-3">
        <div className="flex items-center gap-4  ">
          <div className="h-6 w-[2px] bg-primary"></div>
          <div>
            <h2 className="headline font-bold text-background">
              Our Electrical Design Process{" "}
            </h2>
          </div>
        </div>
        <h3 className="title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
          {" "}
          We follow a comprehensive, methodical approach to ensure every
          electrical design project is completed with precision, efficiency and
          compliance.
        </h3>
      </header>
      <div className="mt-10 wrapper grid grid-cols-1 gap-6 ss:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ">
        {processes.map((process, i) => (
          <article
            key={i}
            className="flex gap-5 rounded-md   p-3 hover:shadow shadow-background/20 hover:cursor-pointer transition-transform duration-300 ease-in-out"
          >
            <div className=" size-16   flex items-center justify-center text-2xl text-primary  bg-tertiary-white text-center rounded-full">
              {process.icon}
            </div>
            <div className=" w-3/4 flex flex-col gap-2">
              <div className="bg-banner label-text text-center text-background w-2/4 p-2 rounded-lg">
                {process.step}
              </div>
              <h4 className=" title font-semibold text-background">
                {process.title}
              </h4>
              <p className="p-text text-background/70">{process.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
