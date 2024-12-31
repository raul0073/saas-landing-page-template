"use client";
import logo from "@/../public/images/rml_v2.png";
import useScrollAndScreen from "@/app/customHooks/useScrollAndResize";
import Image from "next/image";
import {
  ButtonDefaultComp,
  ButtonOutlineComp,
} from "../../../../components/Button";
import MobileMenu from "./components/MobileMenu";
import { navLinks } from "./constants/data";
import { useState } from "react";

export default function Navbar() {
  const { hasScrolled, screenLg } = useScrollAndScreen();
  const [isMobileMenuOn, setIsMobileMenuOn] = useState<boolean>(false);

  return (
    <section className="w-full py-2 md:py-4 px-2 md:px-6 relative">
      <div
        className={`${isMobileMenuOn && "hidden"} container max-w-5xl mx-auto rounded-full py-2 px-4 md:pr-2 items-center ${
          hasScrolled && screenLg ? "scrolledNav" : ""
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center">
            <Image src={logo} alt="logo" className="h-8 md:h-9 w-auto" />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <nav className="">
              <ul className="flex gap-6 font-medium">
                {navLinks.map((link, i) => (
                  <li key={`${link.href}-${i}`} className="shrink-0">
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white hover:tracking-wider transition-all duration-300 ease-in-out"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex justify-end gap-2">
            <MobileMenu setIsMobileMenuOn={setIsMobileMenuOn} />
            <div className="hidden md:inline-flex gap-4">
              <ButtonOutlineComp
                title="Login"
                className=""
                link="https://rmsa-admin.vercel.app"
              />
              <ButtonDefaultComp
                title="Get Started"
                className="hover:text-black/80"
                link="/checkout"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
