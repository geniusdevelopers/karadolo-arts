import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href={"/"} className={`${styles.home_link}`}>
        artSam
      </Link>
      <div className={styles.nav_links_container}>
        <AiOutlineHome className={styles.nav_icon} />
        <FcAbout className={styles.nav_icon} />
        <BiPhoneCall className={styles.nav_icon} />
        <BsCartPlus className={styles.nav_icon} />
      </div>
    </div>
  );
}
