import React from "react";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import Image from "../corbin.jpeg";
import Resume from "../resume.pdf";

const Home = () => {
  return (
    <section id="home">
      <div className="container flex flex-col-reverse md:flex-row items-center p-6 mx-auto mt-10 justify-between space-y-0 md:space-y-0">
        {/* Left Item */}
        <div className="flex flex-col mb-32 mt-16 space-y-12 xl:ml-32 md:w-1/2">
          <div className="max-w-md text-5xl font-bold text-center tracking-wide text-darkBlue md:text-7xl md:text-left">
            Hey, I'm Corbin Arnett.
          </div>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            I'm a web developer based in Oslo, Norway. When I'm not building
            things with Javascript, you can probably find me digging your local
            record store.
          </p>
          <div className="flex justify-center space-x-6 md:justify-start">
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="p-3 px-6 text-white tracking-wide font-medium bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Resume
            </a>
          </div>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.linkedin.com/in/corbinarnett/" target="blank">
              <FaLinkedin
                size={40}
                className="hover:scale-110 fill-[#0072b1]"
              />
            </a>
            <a href="https://github.com/corbinarnett" target="blank">
              <FaGithubSquare
                size={40}
                className="hover:scale-110 fill-darkBlue"
              />
            </a>
            <a href="https://instagram.com/corbinarnett" target="blank">
              <FaInstagramSquare
                size={40}
                className="hover:scale-110 fill-[#e95950]"
              />
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2 xl:mr-32 md:pb-16">
          <img src={Image} alt="Corbin" className="rounded-full scale-75" />
        </div>
      </div>
    </section>
  );
};

export default Home;
