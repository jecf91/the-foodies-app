"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./navlink.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${classes.navlink} ${
        path.startsWith(href) ? classes.active : undefined
      }`}
    >
      {children}
    </Link>
  );
}
