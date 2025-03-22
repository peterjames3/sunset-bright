export default function WorkingProcess() {
  return (
    <section className="w-full bg-foreground py-5 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3 w-full items-center  justify-center">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h2 className="headline font-bold text-background">
                How Solar Water Heater Works
              </h2>
            </div>
          </div>
        </header>
      </div>
      <div className=" wrapper mt-10 text-background p-text flex flex-col gap-3">
        {/* Working Process */}
        <p>
          Solar water heating systems, or ‘solar thermal’ systems, use free heat
          from the sun to warm domestic hot water. A conventional boiler or
          immersion heater can be used to make the water hotter, or to provide
          hot water when solar energy is unavailable. Heat absorbed by the
          panels is used to pre-heat the water in a hot water storage cylinder.
          This reduces the amount of fuel needed to bring the hot water up to a
          usable temperature, saving money on heating bills and reducing carbon
          emissions. Producing domestic hot water for showers, baths, and hot
          taps makes up a significant proportion of a household’s energy use.
        </p>
        <p>
          Based solely upon the current cost of utilities, a solar water heating
          system can reasonably be expected to pay for itself within a 10-year
          period. That leaves 20 years of additional savings. These figures do
          not even include periodic rate increases for gas or electric. Unlike
          conventional energy costs, the price of sunlight remains a constant
          zero year after year. If you are planning to replace your existing
          boiler and already have solar panels on your home, many of our
          products are designed to support the use of energy from these panels
          to supplement your heating with a completely natural, green energy
          source.
        </p>
        <p>
          If you are investing in a new heating system, we advise you to
          consider designing it from the outset to incorporate these collectors.
          We provide evacuated tube and flat plate collector systems, both of
          which can be mounted on your roof.
        </p>
        <p>
          Taking advantage of this renewable energy technology will help you to
          lower your consumption of mains energy, which in turn will reduce your
          fuel bills and cut your carbon footprint.
        </p>
      </div>
    </section>
  );
}
