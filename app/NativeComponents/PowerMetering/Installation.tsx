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
      title: "Initial Consultation & Site Assessment",
      description:
        "We evaluate your current power system and understand your monitoring requirements.",
    },
    {
      icon: Ruler,
      title: "System Selection & Design",
      description:
        "Our experts select and design the optimal solutions for your needs.",
    },
    {
      icon: WrenchIcon,
      title: "Professional Installation & Integration",
      description:
        "Professional installation and seamless integration with your existing infrastructure.",
    },
    {
      icon: CheckCircle2,
      title: "Data Analytics & Reporting",
      description:
        "Setup of comprehensive monitoring and automated reporting systems.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support & Maintenance",
      description:
        "Continuous technical support and system maintenance to ensure optimal performance.",
    },
  ];

  return (
    <section className="w-full bg-backgound py-8">
      <header className="wrapper flex flex-col justify-center gap-3">
        <div className="flex items-center gap-4">
          <div className="h-6 w-[2px] bg-primary"></div>
          <div>
            <h3 className="headline font-bold text-foreground">
              How our Power metering Process Work
            </h3>
          </div>
        </div>
        <h4 className="title font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          We follow a systematic approach to implement power monitoring
          solutions that deliver measurable results and long-term value.
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
              <h5 className="text-xl font-bold mb-2 text-foreground/70">
                Step {index + 1}: {step.title}
              </h5>
              <p className="text-foreground/50">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
