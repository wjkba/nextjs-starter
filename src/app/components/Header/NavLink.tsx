"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link className={path.startsWith(href) ? `bg-black` : ``} href={href}>
      {children}
    </Link>
  );
}
