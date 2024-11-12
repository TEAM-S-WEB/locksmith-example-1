import React from "react";
import Image from "next/image";
import styles from "./AboutComponent.module.css";
import img1 from "../../assets/pic/1y.jpg";
import img2 from "../../assets/pic/6y.jpg";
import Link from "next/link";

const AboutComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Get to know us</h1>
        <p>
          Welcome to YSL Services, your trusted locksmith service in the heart
          of New York City. With over a decade of experience, we specialize in
          providing fast, reliable, and professional locksmith solutions for
          both residential and commercial clients. Our team of licensed and
          insured locksmiths is dedicated to ensuring your safety and security,
          offering services ranging from emergency lockouts and key replacements
          to advanced security system installations.
        </p>
        <p>
          At YSL Services, we pride ourselves on our commitment to customer
          satisfaction. Our 24/7 availability means that we are always ready to
          assist you, no matter the time of day. We use the latest technology
          and high-quality materials to ensure that our services meet the
          highest standards. Whether you need a simple lock repair or a
          comprehensive security upgrade, we are here to help you secure your
          property with expertise and care.
        </p>
        <p>
          Choose YSL Services for all your locksmith needs, and experience the
          peace of mind that comes with knowing you're in good hands.
        </p>
        <Link href={"tel:+13472011312"}>
        <button className={styles.btn}>Call Us Today</button>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={img1} width={630} height={430} />
        <Image className={styles.image} src={img2} width={630} height={430} />
      </div>
    </div>
  );
};

export default AboutComponent;
