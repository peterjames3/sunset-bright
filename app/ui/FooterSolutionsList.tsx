import { ArrowRight } from "lucide-react";

export default function FooterSolutionsList() {
  const solutions = [
    { name: "Power Metering", link: "/services/power-metering" },
    {
      name: "CCTV, Electric Fence and Alarms",
      link: "/services/cctv-fence-alarm",
    },
    { name: "Solar Water Pumps", link: "/services/solar-water-pump" },
    {
      name: "Electrical Installaion",
      link: "/services/electrical-installation",
    },
    { name: "Solar Water Heating", link: "/services/solar-water-heating" },
    { name: "Solar Installation", link: "/services/solar-installation" },
    { name: "Electrical Design", link: "/services/electrical-design" },
  ];

  return (
    <>
      <h3 className="text-xl font-semibold mb-6">Solutions</h3>
      <ul className="space-y-4">
        {solutions.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.link}
              className="flex items-center text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowRight className="size-4 mr-2 text-primary transform group-hover:translate-x-1 transition-transform" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
