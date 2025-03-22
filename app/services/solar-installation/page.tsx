import Hero from "@/app/NativeComponents/SolarInstallation/Hero";
import InstallationServices from "@/app/NativeComponents/SolarInstallation/InstallationServices";
import TypesOfSolarPanel from "@/app/NativeComponents/SolarInstallation/TypesOfSolarPanel";
import Projects from "@/app/NativeComponents/Home/Projects";
import Testimonial from "@/app/NativeComponents/Home/Testimonial";
import BrandPatterns from "@/app/NativeComponents/About/BrandPatterns";
import FAQs from "@/app/NativeComponents/SolarInstallation/FAQs";
import Banner from '@/app/NativeComponents/SolarInstallation/Banner';

import Maintenance from "@/app/NativeComponents/SolarInstallation/Maintenance";
export default function SolarInstallation() {
  return (
    <>
      <Hero />
      <InstallationServices />
      <TypesOfSolarPanel />
      <Projects />
      <Maintenance />
      <Testimonial />
      <BrandPatterns />

      <FAQs />
      <Banner />
    </>
  );
}
