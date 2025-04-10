import ElectricalDesignHero from "@/app/NativeComponents/ElectricalDesign/ElectricalDesignHero";
import ElectricalDesignScope from "@/app/NativeComponents/ElectricalDesign/ElectricalDesignScope";
import AboutElectrical from "@/app/NativeComponents/ElectricalDesign/AboutElectrical";
import Process from "@/app/NativeComponents/ElectricalDesign/Process";
import SoftwareTools from "@/app/NativeComponents/ElectricalDesign/SoftwareTools";
import Design from "@/app/NativeComponents/ElectricalDesign/Design";
import Banner from "@/app/NativeComponents/ElectricalDesign/Banner";
export default function PowerMetering() {
  return (
    <>
      <ElectricalDesignHero />
      <ElectricalDesignScope />
      <AboutElectrical />
      <Process />
      <SoftwareTools />
      <Design />
      <Banner />
    </>
  );
}
