import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-black p-8 gap-8">
      <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src="/lumino.svg" className="h-16 w-auto" alt="" />
          <span className="hidden md:block text-2xl font-light text-blue-300/70">|</span>
          <p>Igninte your entrepreneurial spark</p>
        </div>
        <div className="flex gap-5">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">REGISTER</a>
        </div>
      </div>
      <hr className="w-full border-[0.6px] border-blue-300/70" />
      <div className="flex w-full text-white justify-center md:justify-end">
        <div className="flex items-center gap-3">
          <FaInstagram size={25} />
          <FaFacebookF size={25} />
          <FaPhoneAlt size={25} />
          <BsTwitterX size={25} />
          <IoMdMail size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
