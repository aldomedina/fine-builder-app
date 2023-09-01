import logo from "@/assets/images/fine-logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.subnav}>
        <Link href="/about">about</Link>
        <Link href="/collection">collection</Link>
      </div>
      <div className={styles.subnav}>
        <Image priority src={logo} alt="fine logo" />
      </div>
      <div className={styles.subnav}>
        <Link href="/create">create</Link>
        <div>sign in</div>
      </div>
    </div>
  );
};

export default Nav;
