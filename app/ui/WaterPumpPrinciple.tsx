export default function WaterPumpPrinciple() {
  return (
    <section className="bg-background text-foreground py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
    
        <h3 className="text-2xl font-semibold text-tertiary mb-4">
          Solar-Powered Water Pump System Components
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-tertiary">
              Solar Panels
            </h4>
            <p>
              Also called the solar photovoltaic (PV) system, solar panels
              collect photons from the sun and convert them into electricity in
              three steps:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                Solar cells absorb photons and convert them into DC electricity.
              </li>
              <li>An inverter converts DC electricity into AC electricity.</li>
              <li>This electricity powers the water pump.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-tertiary">
              Water Pump Motor
            </h4>
            <p>
              The water pump motor extracts water from a source such as
              underground wells, rivers, or reservoirs for irrigation,
              household, or other uses.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-tertiary">Inverter</h4>
            <p>
              Water pumps typically require AC electricity, so the inverter
              converts DC power from the solar panels into AC power for the
              pump.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-tertiary">Pipes</h4>
            <p>
              Pipes transport water from the original source to designated
              destinations such as purification systems, storage tanks, or
              fields.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-tertiary">Water Tank</h4>
            <p>
              A water tank is used to store water for use when sunlight isn’t
              available, ensuring a continuous water supply.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-tertiary">
              Pump Controllers
            </h4>
            <p>
              Controllers regulate the pump operation, preventing damage from
              electrical irregularities or running dry. They also optimize water
              delivery efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
