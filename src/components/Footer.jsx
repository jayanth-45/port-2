import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-3 xs:py-4 bg-black-100/55 text-white flex flex-col items-center gap-2 xs:gap-2.5 px-4">
      <div className="flex flex-col xs:flex-row items-center gap-3 xs:gap-4 w-full xs:w-auto">
        <a
          href="mailto:jayanth.m003@gmail.com"
          className="flex items-center gap-2 hover:text-[#915EFF] transition-colors text-[12px] xs:text-[13px] sm:text-sm"
        >
          <FaEnvelope size={18} className="xs:w-5 xs:h-5" />
          <span className="break-all xs:break-normal">jayanth.m003@gmail.com</span>
        </a>
        <a
          href="tel:6362815412"
          className="flex items-center gap-2 hover:text-[#915EFF] transition-colors text-[12px] xs:text-[13px] sm:text-sm"
        >
          <FaPhone size={18} className="xs:w-5 xs:h-5" />
          <span>+91 6362815412</span>
        </a>
      </div>
      <p className="text-secondary text-[10px] xs:text-[11px] sm:text-xs text-center leading-relaxed">
        India | Live Applications: cordestitch.com | nandhubus.com | crm.seabed2crest.com
      </p>
    </footer>
  );
};

export default Footer;