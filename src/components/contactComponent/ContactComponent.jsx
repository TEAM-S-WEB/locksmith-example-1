import React from "react";
import styles from "./contactComponent.module.css";
import Link from "next/link";

const ContactComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Your safety, our priority – unlocking peace of mind in every situation.
      </h1>
      <Link href={"tel:+13472011312"}>
      <button className={styles.btn}>Call Us Today</button>
      </Link>
    </div>
  );
};

export default ContactComponent;
