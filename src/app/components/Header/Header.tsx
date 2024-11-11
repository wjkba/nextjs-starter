"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/services", text: "Services" },
    { href: "/contact", text: "Contact Us" },
    { href: "/blog", text: "Blog" },
    { href: "/faq", text: "FAQ" },
    { href: "/about", text: "About Us" },
  ];

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-white sticky top-0 text-black shadow-sm z-50">
      <div className="md:max-w-[1300px] max-w-[450px] mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Logo
          </Link>

          <button
            className="md:hidden w-full h-full max-h-[3rem] max-w-[3rem] border border-black"
            onClick={handleToggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            H
          </button>

          <nav
            className={`fixed inset-0 z-10 flex justify-center items-center md:hidden transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="bg-white h-screen shadow-lg px-2 w-full max-w-[450px]">
              <div className=" flex justify-end items-center h-[56px]">
                <button
                  className="md:hidden w-full h-full max-h-[3rem] max-w-[3rem] border border-black"
                  onClick={handleToggle}
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  X
                </button>
              </div>
              <ul className="font-lg flex bg-pink-300 flex-col space-y-4">
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.href}>{link.text}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <nav className="hidden md:flex space-x-4">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
