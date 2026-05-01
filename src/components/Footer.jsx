import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { IoCallSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#0053e2] text-white pt-20 pb-20">
      <div className="w-10/12 mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
          <div className="space-y-3.5">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
            </Link>
            <p>
              A complete summer essentials store designed to keep you cool,{" "}
              <br />
              comfortable, and stylish. Discover everything you need for <br />{" "}
              sunny days in one place. Shop smart, stay fresh, and enjoy <br />{" "}
              your summer lifestyle.
            </p>
            <div className="flex items-center gap-1.5 text-xl">
              <span>
                <FaLocationDot />
              </span>
              <h3>Rajshahi, Dhaka, Bangladesh</h3>
            </div>
            <div className="flex items-center gap-1.5 text-xl hover:text-amber-500 cursor-pointer">
              <span>
                <IoCallSharp />
              </span>
              <h3>0968554414621</h3>
            </div>
            <div className="flex items-center gap-1.5 text-xl hover:text-amber-500 cursor-pointer">
              <span>
                <IoMail />
              </span>
              <h3>online2021@gmail.com</h3>
            </div>
            <div className="flex gap-2">
              <span className="bg-white text-amber-500 p-2 text-2xl rounded-full cursor-pointer hover:bg-amber-500 hover:text-white">
                <FaFacebookF />
              </span>
              <span className="bg-white text-amber-500 p-2 text-2xl rounded-full cursor-pointer hover:bg-amber-500 hover:text-white">
                <FaWhatsapp />
              </span>
              <span className="bg-white text-amber-500 p-2 text-2xl rounded-full cursor-pointer hover:bg-amber-500 hover:text-white">
                <FaTwitter />
              </span>
            </div>
          </div>
          <div className="flex gap-10 p-0 pt-10 lg:p-7">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Information</h3>
              <p>About us</p>
              <p>Contact us</p>
              <p>Company Information</p>
              <p>Privacy Policy</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Shop</h3>
              <p>Support Center</p>
              <p>How to Order</p>
              <p>Payment</p>
              <p>Shipping</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="flex gap-10 p-0 pt-10 lg:p-7">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Support</h3>
              <p>Support Center</p>
              <p>How to Order</p>
              <p>Payment</p>
              <p>Shipping</p>
              <p>FAQ</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Your Information</h3>
              <p>Your information is used to process orders</p>
              <p>improve our services</p>
              <p>provide customer support</p>
              <p>important updates related to your purchase</p>
            </div>
          </div>
        </div>
        <hr className="mt-10"/>
        <p className="mt-3">Copyright © 2026 Alok Barman</p>
      </div>
    </div>
  );
};

export default Footer;
