"use client";
import React from "react";
import { useState } from "react";
// import { Link, Button } from "@heroui/react";
import Link from "next/link";
import NavSearch from "./NavSearch";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const navLink = (
    <>
      <Link
        href="/"
        className={`${pathName === "/" ? "text-amber-500 font-bold" : "text-white font-bold"}`}
      >
        Home
      </Link>
      <li>
        <Link
          href="/products"
          className={`${pathName === "/products" ? "text-amber-500 font-bold" : "text-white font-bold"}`}
        >
          Products
        </Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#0053e2] backdrop-blur-lg p-2 text-white">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3 justify-center">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="w-14 sm:w-14 md:w-18 h-auto"
              />
            </Link>
          </div>
        </div>
        <div>
          <NavSearch></NavSearch>
        </div>

        <div className="flex gap-5">
          <div>
            <ul className="hidden sm:flex gap-3.5">{navLink}</ul>
          </div>
          <div className="hidden sm:flex justify-center items-center gap-1">
            <Link
              href="/account"
              className={`${pathName === "/account" ? "text-amber-500 font-bold" : "text-white font-bold"}`}
            >
              {" "}
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </Link>
            <Link
              href="/signin"
              className={`${pathName === "/signin" ? "text-amber-500 font-bold" : "text-white font-bold"}`}
            >
              Sign In
            </Link>
          </div>
          <div className="relative inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {navLink}
            <Link
              href="/account"
              className={`${pathName === "/account" ? "text-amber-500 font-bold" : "text-white font-bold"}`}
            >
              <span className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </span>
                <span>Account</span>
              </span>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
