import React from "react";
import { SiNetlify, SiReact } from "react-icons/si";

const Footer = () => {
  return (
    <section id="footer" className="w-full bg-slate-50 shadow-sm">
      <nav className="container mx-auto p-6">
        <div className="flex items-center justify-center space-x-6 ">
          <div className="flex text-neutral-600/60">Made by Corbin Arnett</div>
          <div className="flex">
            <SiNetlify size={20} className="fill-[#00AD9F]" />
          </div>
          <div className="flex">
            <SiReact size={20} className="fill-[#61dbfb]" />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Footer;
