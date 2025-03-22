import Hero from "@/app/NativeComponents/PowerMetering/Hero";
import PowerMeteringSol from "@/app/NativeComponents/PowerMetering/PowerMeteringSol";
import Installation from "@/app/NativeComponents/PowerMetering/Installation";
import Certifications from "@/app/NativeComponents/PowerMetering/Certifications";
import Banner from "@/app/NativeComponents/PowerMetering/Banner";
export default function PowerMetering() {
  return (
    <>
      <Hero />
      <PowerMeteringSol />
      <Installation />
      <Certifications />
      <Banner />
    </>
  );
}
