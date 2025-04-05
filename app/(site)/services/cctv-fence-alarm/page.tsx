import CCTvHero from "@/app/NativeComponents/CCTVFenceAndAlarm/CCTvHero";
import About from "@/app/NativeComponents/CCTVFenceAndAlarm/About";
import Benefits from "@/app/NativeComponents/CCTVFenceAndAlarm/Benefits";
import Cctv from "@/app/NativeComponents/CCTVFenceAndAlarm/Cctv";
import Fence from "@/app/NativeComponents/CCTVFenceAndAlarm/Fence";
import Alarm from "@/app/NativeComponents/CCTVFenceAndAlarm/Alarm";
import AlarmSystems from "@/app/NativeComponents/CCTVFenceAndAlarm/AlarmSystems";

export default function PowerMetering() {
  return (
    <>
      <CCTvHero />
      <About />
      <Benefits />
      <Cctv />
      <Fence />
      <Alarm />
      <AlarmSystems />
    </>
  );
}
