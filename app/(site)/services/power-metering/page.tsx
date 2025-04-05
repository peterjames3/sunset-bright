import PowerMeteringHero from "@/app/NativeComponents/PowerMetering/PowerMeteringHero";
import PowerMeteringSol from "@/app/NativeComponents/PowerMetering/PowerMeteringSol";
import Installation from "@/app/NativeComponents/PowerMetering/Installation";
import Certifications from "@/app/NativeComponents/PowerMetering/Certifications";
import Banner from "@/app/NativeComponents/PowerMetering/Banner";
export default function PowerMetering() {
  return (
    <>
      <PowerMeteringHero />
      <PowerMeteringSol />
      <Installation />
      <Certifications />
      <Banner />
    </>
  );
}
