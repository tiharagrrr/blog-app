import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Facebook" width={24} height={24} />
        <Image src="/tiktok.png" alt="Facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="Facebook" width={24} height={24} />
      </div>
      <div className={styles.logo}>Tee Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
