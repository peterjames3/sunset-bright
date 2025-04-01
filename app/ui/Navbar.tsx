"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Mobile from "@/app/ui/Mobile";
import Image from "next/image";
import SwitchBtn from "./SwitchBtn";
import {
  MailCheck,
  PhoneCall,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const Menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    {
      name: "Services",
      href: "/services/solar-installation",
      submenu: [
        { name: "Power Metering", href: "/services/power-metering" },
        {
          name: "CCTV,Electric Fence and Alarms",
          href: "/services/cctv-fence-alarm",
        },

        {
          name: "Electrical Installation",
          href: "/services/electrical-installation",
        },
        { name: "Solar Water Pump", href: "/services/solar-water-pump" },
        { name: "Solar Installation", href: "/services/solar-installation" },
        { name: "Solar Water Heating", href: "/services/solar-water-heating" },
        { name: "Electrical Design", href: "/services/electrical-design" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full shadow-sm py-6 flex flex-col gap-2 fixed top-0 z-50 bg-background">
      <section className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] px-4 md:px-0 sm:flex items-center justify-between">
        <address className="sm:flex items-center gap-6 text-p-sm sm:text-p-md md:text-p-lg">
          <div className="flex gap-2 hover:text-secondary transition-colors delay-100 items-center text-foreground">
            <MailCheck />
            <a href="mailto:sunsetbrightenergylimited@gmail.com">
              sunsetbrightenergylimited@gmail.com
            </a>
          </div>
          <div className="flex gap-2 hover:text-secondary transition-colors delay-100 items-center text-foreground">
            <PhoneCall />
            <a href="tel:+254716783432">+254 716 783432</a>
          </div>
        </address>
        <nav
          aria-label="Social Media Links"
          className="hidden md:flex text-2xl gap-5 text-foreground"
        >
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="hover:text-orange-500 transition-colors delay-300" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="hover:text-blue-600 transition-colors delay-300" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </Link>
        </nav>
      </section>
      <div className="w-full mx-auto max-w-full md:max-w-[840px] xl:max-w-[1040px] flex items-center justify-between gap-6 px-4 md:px-0">
        <nav className="font-bold text-[1.2rem] lg:text-[1.5rem]">
          <Link href="/" className="flex items-center gap-1 lg:gap-2">
            <Image
              src="/favicon-32x32.png"
              alt="sunsetBright logo"
              height={30}
              width={30}
              priority={true}
              className="object-contain"
            />
            <nav>
              <span className="text-foreground">Sunset</span>
              <span className="text-primary">Bright</span>.
            </nav>
          </Link>
        </nav>

        <div className="hidden md:flex">
          <nav className="flex sm:gap-2 md:gap-5">
            {Menu.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
                onMouseLeave={() => item.submenu && setIsServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "sm:text-[0.68rem] md:text-[0.99rem] font-medium hover:text-primary",
                    item.href === pathname && "text-primary font-semibold"
                  )}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50"
                      >
                        {item.submenu.map((subitem, subIndex) => (
                          <li key={subIndex} className="p-2 hover:bg-gray-100">
                            <Link
                              href={subitem.href}
                              className="block text-[1rem] text-gray-700"
                            >
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex">
          <SwitchBtn />
        </div>

        <div className="flex md:hidden">
          <Mobile />
        </div>
      </div>
    </header>
  );
}
