import React from "react";
import styles from "./blogByIdComponent.module.css";
import NetworkNavbar from "@/components/common/Networks/NetworkNavbar";
import Image from "next/image";
import Link from "next/link";

const BlogsComponent = ({ blog }) => {
  return (
    <div className={styles.container}>
      <header>
        <h1>YSL SERVICES</h1>
      </header>
      <div className={styles.imageContainer}>
        <Image
          fill
          className={styles.image}
          src={blog.pic?.url}
          alt="/blogimage"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 style={{ margin: "40px 0", fontWeight: 100 }}>{blog?.title}</h1>
        <span style={{ color: "gray", padding: "3px" }}>
          <p>DATE: {blog.date}</p>
        </span>
        <div className={styles.paragraphContainer}>
          <p>{blog?.article}</p>
        </div>
        <div style={{ marginTop: "15px", marginBottom: "5px" }}>
          <h2 className={styles.subtitle}>{blog?.subtitle}</h2>
        </div>
        <div className={styles.paragraphContainer}>
          <p>{blog?.subparagraph}</p>
        </div>
        <div style={{ marginTop: "25px" }}>
          <h2 className={styles.subtitle}>{blog?.titleParagraph}</h2>
        </div>
        <div className={styles.paragraphContainer}>
          <p>{blog?.paragraph}</p>
        </div>
        <NetworkNavbar callUrl={"tel:+13472011312"} />
      </div>
    </div>
  );
};

export default BlogsComponent;
