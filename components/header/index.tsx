import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import classes from "./header.module.css";
import Background from "@/components/background";
import NavLink from "./components/navlink";

export default function Header() {
  return (
    <>
      <Background />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImage.src}
            alt="app logo"
            height={100}
            width={100}
            priority
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
