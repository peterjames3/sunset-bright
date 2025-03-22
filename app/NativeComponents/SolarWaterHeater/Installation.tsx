import {
  ClipboardList,
  Ruler,
  WrenchIcon,
  CheckCircle2,
  HeadphonesIcon,
} from "lucide-react";

export default function Installation() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Initial Consultation",
      description:
        "We assess your needs and property to recommend the best solar water heating solution.",
    },
    {
      icon: Ruler,
      title: "Site Survey & Design",
      description:
        "Our engineers conduct a detailed site survey and create a custom installation plan.",
    },
    {
      icon: WrenchIcon,
      title: "Professional Installation",
      description:
        "Expert technicians install your system following the highest safety standards.",
    },
    {
      icon: CheckCircle2,
      title: "Testing & Commissioning",
      description:
        "We thoroughly test the system and ensure everything works perfectly.",
    },
    {
      icon: HeadphonesIcon,
      title: "After-Care Support",
      description:
        "Ongoing maintenance support and warranty coverage for peace of mind.",
    },
  ];

  return (
    <section className="w-full bg-foreground py-8">
      <header className="wrapper flex flex-col justify-center gap-3">
        <div className="flex items-center gap-4">
          <div className="h-6 w-[2px] bg-primary"></div>
          <div>
            <h3 className="headline font-bold text-background">
              Our Installation Process
            </h3>
          </div>
        </div>
        <h4 className="title font-semibold bg-gradient-to-r from-background to-primary bg-clip-text text-transparent">
          A smooth, professional installation process from start to finish
        </h4>
      </header>

      <div className="wrapper mt-14">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-12 last:mb-0">
            <div className="flex-shrink-0 mr-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-cardBg flex items-center justify-center">
                  <step.icon className="size-8 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 w-px h-12 bg-tertiary-white -translate-x-1/2"></div>
                )}
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2 text-background/70">
                Step {index + 1}: {step.title}
              </h5>
              <p className="text-background/50">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
