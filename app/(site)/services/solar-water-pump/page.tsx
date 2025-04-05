//"use client";
import WaterPumpsHero from "@/app/NativeComponents/WaterPumps/WaterPumpsHero";
import Components from "@/app/NativeComponents/WaterPumps/Components";
import TypesOfWaterpumps from "@/app/NativeComponents/WaterPumps/TypesOfWaterPumps";
import SolarPumpsComparison from "@/app/NativeComponents/WaterPumps/SolarPumpsComparison";
import WorkingPrinciple from "@/app/NativeComponents/WaterPumps/WorkingPrinciple";
import UseCases from "@/app/NativeComponents/WaterPumps/UseCases";
export default function SolarWaterHeater() {
  return (
    <>
      <WaterPumpsHero />
      <Components />
      <TypesOfWaterpumps />
      <SolarPumpsComparison />
      <WorkingPrinciple />
      <UseCases />
    </>
  );
}
