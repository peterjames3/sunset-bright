export default function AboutElectrical() {
  return (
    <section className="w-full bg-background py-8 min-h-[18rem]">
      <div className="wrapper">
        <header className="flex flex-col gap-3 w-full items-center  justify-center">
          <div className="flex items-center gap-4  ">
            <div className="h-6 w-[2px] bg-primary"></div>
            <div>
              <h2 className="headline font-bold text-foreground">
                About our Electrical Design Services
              </h2>
            </div>
          </div>
        </header>
      </div>
      <div className=" wrapper mt-10 text-foreground p-text flex flex-col gap-3">
        {/* Working Process */}
        <p>
          Electrical design is the foundation of every safe and efficient power
          system. Our comprehensive electrical design services ensure that your
          electrical systems are not not only reliable and efficient but also
          fully compliant with all relevant standards and codes.
        </p>
        <p>
          Whether you need designs for new construction, renovations, or system
          upgrades, our team of certified electrical engineers brings decade of
          experience to deliver solutions that meet your specific requirements
          while adhering to NEC, IEC, and IEEE standards.
        </p>
       
      </div>
    </section>
  );
}
