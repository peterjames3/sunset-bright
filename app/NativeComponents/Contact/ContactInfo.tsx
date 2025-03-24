import { MapPin, Clock10, Mail, Phone, MessageSquareText } from "lucide-react";
import ContactForm from "@/app/ui/ContactForm";
export default function ContactInfo() {
  return (
    <div className="w-full py-8 bg-background">
      <div className="wrapper grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <section className=" space-y-6">
          <h2 className="headline mb-12 font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-textColor mb-12 font-medium text-[1.1rem]">
            Ready to switch to solar ? Have questions about maintenance,
            intallation? Our team of experts is here to help you
          </p>
          <address className="space-y-7 ">
            <div className="flex items-start gap-2">
              <MapPin className="size-7 text-primary" />

              <span className="text-textColor p-text">
                Ruiru <br />
                Rowini House, 1st floor room 17
              </span>
            </div>
            <div className="flex items-start gap-2">
              <Clock10 className="size-7 text-primary" />
              <span className="text-textColor">
                Mon-Fri: 8:00 AM - 5:00 PM <br />
                Saturday: 9:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-7 text-primary" />
              <a
                href="sunsetbrightenergylimited@gmail.com"
                className="text-textColor"
              >
                sunsetbrightenergylimited@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-7 text-primary" />
              <a href="tel:+254 716 783432" className="text-textColor">
                +254 716 783432
              </a>
            </div>
          </address>
        </section>
        <section>
          <header className="mb-10">
            <div className="flex items-center gap-2">
              <MessageSquareText className="size-7 text-primary font-medium" />

              <span className="text-textColor font-semibold title">
                Send Us a Message
              </span>
            </div>
          </header>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
