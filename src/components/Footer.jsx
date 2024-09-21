import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-8 bg-black p-8">
      <div className="flex flex-col items-center justify-between text-neutral-400 md:flex-row">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img src="/lumino.svg" className="h-16 w-auto" alt="" />
          <span className="hidden text-2xl font-light text-blue-300/70 md:block">
            |
          </span>
          <p>Igninte your entrepreneurial spark</p>
        </div>
        <div className="flex gap-5">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">REGISTER</a>
        </div>
      </div>
      <hr className="w-full border-[0.6px] border-blue-300/70" />
      <div className="flex w-full justify-center text-white md:justify-end">
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
