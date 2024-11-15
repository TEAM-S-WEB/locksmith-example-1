import React from "react";
import styles from "./networknavbar.module.css";
import Image from "next/image";
import Link from "next/link";

const NetworkNavbar = ({ facebookUrl, instegramUrl, whatsappUrl, callUrl }) => {
  return (
    <div className={styles.container}>
      {facebookUrl ? (
        <Link className={styles.link} href={facebookUrl}>
          <Image src={"https://i.ibb.co/fMBvfFw/02.webp"} width={35} height={35} alt="/facebook" />
        </Link>
      ) : (
        ""
      )}
      {instegramUrl ? (
        <Link className={styles.link} href={instegramUrl}>
          <Image src={"https://i.ibb.co/GT8LsRp/04.webp"} width={35} height={35} alt="/instegram" />
        </Link>
      ) : (
        ""
      )}
      {whatsappUrl ? (
        <Link className={styles.link} href={whatsappUrl}>
          <Image src={"https://i.ibb.co/XDdYWp3/03.webp"} width={35} height={35} alt="/whatsapp" />
        </Link>
      ) : (
        ""
      )}
      {callUrl ? (
        <Link className={styles.link} href={callUrl}>
          <Image src={"https://i.ibb.co/SQqDRzB/01.webp"} width={35} height={35} alt="/call" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default NetworkNavbar;
