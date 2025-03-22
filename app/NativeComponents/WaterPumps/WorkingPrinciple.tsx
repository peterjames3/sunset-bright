import BenefitsOfSolarWaterPump from "@/app/ui/BenefitsOfSolarWaterPump";
import WaterPumpPrinciple from "@/app/ui/WaterPumpPrinciple";
export default function WorkingPrinciple() {
  return (
    <section className="w-full bg-background py-5 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h3 className="headline font-bold text-foreground">
                How Do Solar-Powered Water Pumps Work?
              </h3>
            </div>
          </div>
          <h4 className=" font-semibold p-text bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Essentially, solar-powered water pumps work by converting the sun’s
            rays (photons) to electricity that will operate the water pump. It
            uses solar panels to collect the photons (units of light) from
            sunlight, producing the direct current (DC) that provides the energy
            for the motor to pump water out from its source. An inverter is used
            if the pump motor needs alternating current (AC) rather than DC.
          </h4>
        </header>
      </div>
      <div>
        {/* Benefits Grid */}
        <WaterPumpPrinciple />
        <BenefitsOfSolarWaterPump />
      </div>
    </section>
  );
}
                                                                                                            