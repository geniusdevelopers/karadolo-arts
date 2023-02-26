import { useState, useRef } from "react";

import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

import styles from "../styles/Nav.module.css";
import Link from "next/link";
import MyCart from "./Cart";

export default function Nav(props) {
  const cartRef = useRef(null);
  return (
    <>
      <MyCart ref={cartRef} />
      <div className={styles.nav}>
        <Link href={"/"} className={`${styles.home_link}`}>
          artS
        </Link>
        <div className={styles.nav_links_container}>
          <AiOutlineHome className={styles.nav_icon} />
          <label className={styles.float_label}>Home</label>
          <FcAbout className={styles.nav_icon} />
          <label className={styles.float_label}>About</label>
          <BiPhoneCall className={styles.nav_icon} />
          <label className={styles.float_label}>Call</label>
          <BsCartPlus
            className={styles.nav_icon}
            onClick={() => {
              cartRef.current.handleCartVisibility();
              console.log("parent");
            }}
          />
          <label className={styles.float_label}>My Orders</label>
        </div>
      </div>
    </>
  );
}
