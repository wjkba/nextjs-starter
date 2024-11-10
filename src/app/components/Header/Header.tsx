"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      href: "/services",
      text: "Services",
    },
    {
      href: "/contact",
      text: "Contact Us",
    },
    {
      href: "/blog",
      text: "Blog",
    },
    {
      href: "/faq",
      text: "FAQ",
    },
    {
      href: "/about",
      text: "About Us",
    },
  ];

  function handleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="bg-white text-black shadow-sm z-50">
        <div className="max-w-[450px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl">
              Logo
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            ></button>

            <nav className="hidden md:block">
              <ul className="flex gap-4">
                {links.map((link, index) => (
                  <NavLink key={index} href={link.href}>
                    {link.text}
                  </NavLink>
                ))}
              </ul>
            </nav>

            <button className="md:hidden text-lg font-bold border-2 max-w-[2rem] w-full border-black">
              H
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
