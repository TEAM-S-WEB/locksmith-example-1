import React from "react";
import { Metadata } from "next";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import GlobalApi from "@/utils/GlobalApi";
import styles from "./blogpage.module.css";
import NetworkNavbar from "@/components/common/Networks/NetworkNavbar";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

async function getBlog(id) {
  const blog = await GlobalApi.GetBlogById(id);
  return blog;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);
  if (!blog) {
    return;
  }

  return {
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      title: blog?.title,
      description: blog?.description,
      type: "article",
      locale: "en_US",
      url: `https://www.locksmithysl.com/blogs/${id}`,
      siteName: "YLS Services",
      images: [
        {
          url: blog?.pic?.url,
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;

  const blog = await getBlog(id);
  if (!blog) {
    console.log(" requst");
  }
  return (
    <div className={styles.container}>
      <header>
        <h1>YLS SERVICES</h1>
      </header>
      <div className={styles.imageContainer}>
        <Image
          fill
          className={styles.image}
          src={blog.pic.url}
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
        <NetworkNavbar callUrl={"tel:+13472011312"}/>
      </div>
    </div>
  );
};

export default page;
