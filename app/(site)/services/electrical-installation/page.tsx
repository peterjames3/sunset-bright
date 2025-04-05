import ElectricalHero from "@/app/NativeComponents/ElectricalInstallation/ElectricalHero";
import ElectricalInstallationScope from "@/app/NativeComponents/ElectricalInstallation/ElectricalInstallationScope";
import InstallationScope from "@/app/NativeComponents/ElectricalInstallation/InstallationScope";
import Banner from "@/app/NativeComponents/ElectricalInstallation/Banner";
import FAQs from "@/app/NativeComponents/ElectricalInstallation/FAQs";
export default function ElectricalInstallation() {
  return (
    <>
      <ElectricalHero />
      <ElectricalInstallationScope />
      <InstallationScope />
      <FAQs />
      <Banner />
    </>
  );
}
