import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3>YSL SERVICES</h3>
        <Link style={{color: "black"}} href={"/blogs"}>my blogs</Link>
      </div>
      <div>
        <h3>LOCATION</h3>
        <p>
          New York City, Manhattan, Brooklyn, Bronx, Queens and Staten Island
        </p>
      </div>
      <div>
        <h3>CONTACT US</h3>
        <div>
          <p>locksmith.service.ny1@gmail.com</p>
          <p>Tel: +1 (347) 201-1312</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
