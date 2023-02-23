import Link from "next/link";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.column}>
          <h2>Quick Nav Links</h2>
          <div className={styles.quick_nav_container}>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About Our Team</Link>
            <Link href={"/"}>Make Order</Link>
            <Link href={"/"}>Join our Team</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h2>About artSam</h2>
          <p className={styles.about_us_container}>
            The ART Company was born in 1995, but our experience in the world of
            quality footwear manufacturing spans over 30 years. Both The ART
            Company and the ART footwear brand were created in 1995, with an
            ethos that was deliberately young and happy and carefree.
            <br />
            <br />
          </p>
        </div>
        <div className={styles.column}>
          <h2>Get In Touch</h2>
          <div className={styles.in_touch_container}>
            <div>Call: 0718 338 810 / 0777 338 813</div>
            <div className={styles.social_media_icons_container}>
              <ImFacebook className={styles.social_media_icon} />
              <BsInstagram className={styles.social_media_icon} />
              <BsWhatsapp className={styles.social_media_icon} />
              <AiOutlineMail className={styles.social_media_icon} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright_container}>
        <span>Copyright © 2023, All Right Reserved to artSam</span>
        <Link className={styles.copyright_link} href="#">
          Terms & Conditions
        </Link>
      </div>
    </>
  );
}
