import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <div className={styles.boxApp}>
        <h3>YSL SERVICES</h3>
        <h1>IN AN EMERGENCY?</h1>
        </div>
        <Link href={"tel:+1347201312"}>
        <button className={styles.btn}>Call us!</button>
        </Link>
        <div className={styles.boxFooter}>
        <h1>YOUR TRUSTED</h1>
        <h1>NEIGHBORHOOD</h1>
        <h1>LOCKSMITH</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
