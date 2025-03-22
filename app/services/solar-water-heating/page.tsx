//"use client";
import Hero from "@/app/NativeComponents/SolarWaterHeater/Hero";
import WorkingProcess from "@/app/NativeComponents/SolarWaterHeater/WorkingProcess";
import TypesOfWaterHeatingSystems from "@/app/NativeComponents/SolarWaterHeater/TypesOfWaterHeatingSystems";
import BenefitsOfWaterHeaters from "@/app/NativeComponents/SolarWaterHeater/BenefitsOfwaterHeaters";
import PricingTable from "@/app/NativeComponents/SolarWaterHeater/PricingTable";
import Installation from "@/app/NativeComponents/SolarWaterHeater/Installation";
import FAQs from "@/app/NativeComponents/SolarWaterHeater/FAQs";
export default function SolarWaterHeater() {
  return (
    <>
      <Hero />
      <WorkingProcess />
      <TypesOfWaterHeatingSystems />
      <BenefitsOfWaterHeaters />
      <PricingTable />
      <Installation />
      <FAQs />
    </>
  );
}
