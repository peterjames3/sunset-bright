import Image from "next/image";
export default function Cctv() {
  return (
    <div className="w-full bg-foreground">
      <div className=" wrapper grid grid-cols-1 sm:grid-cols-2 gap-10">
        <article className="space-y-10 py-7">
          <h3 className=" text-background headline font-semibold">
            Commercial CCTV Installation Services in Nairobi Kenya
          </h3>
          <p className="text-background/80">
            We have spent years perfecting security and access control systems
            and installing them in business buildings all over Nairobi. Our
            commercial CCTV cameras are designed to keep your staff and your
            assets safe and can be completely personalized to meet your needs
            and to fall within your budget. Our commercial CCTV cameras also
            provide peace of mind to business owners in Nairobi and the
            surrounding areas by giving them constant visual contact with their
            workforce, reducing the temptation of pilferage, improving
            productivity, and reducing time-wasting. Our workplace CCTV
            installation gives you access to 24 hour digital recording from your
            own office, or remotely by internet with a live feed to your
            smartphone, tablet or PC.
          </p>
        </article>
        <figure className=" rounded-lg overflow-hidden">
          <Image
            src="/Precise architectural color photography in warm terracotta and cool teal showcasing a tall security pole with multiple sleek, modern CCTV cameras against a clear blue sky. Cameras feature visible lens.webp"
            alt="cctv"
            width={1200}
            height={900}
            className="object-cover"
          />
        </figure>
      </div>
    </div>
  );
}
