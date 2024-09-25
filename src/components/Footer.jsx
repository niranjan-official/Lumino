import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="z-50 flex w-full flex-col gap-5 bg-black p-8 md:gap-8">
      <div className="flex flex-col items-center justify-between text-neutral-400 md:flex-row">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img src="/lumino.svg" className="h-16 w-auto" alt="" />
          <span className="hidden text-2xl font-light text-blue-300/70 md:block">
            |
          </span>
          <p>Igninte your entrepreneurial spark</p>
        </div>
        <div className="flex gap-5 max-md:mt-3">
          <a href="#home">HOME</a>
          <a href="#info">INFO</a>
          <a href="#registration">REGISTER</a>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      <div className="flex w-full justify-center text-white md:justify-end">
        <div className="flex items-center gap-5">
          {/* <FaInstagram size={25} />
          <FaFacebookF size={25} /> */}
          <a href="tel:+919407902070">
          <FaPhoneAlt size={25} />
          </a>
          
          <a href="mailto:luminoprc@gmail.com">
          <IoMdMail size={25} />
          </a>
          {/* <BsTwitterX size={25} /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
