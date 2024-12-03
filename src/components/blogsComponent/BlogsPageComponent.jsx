import React from "react";
import styles from "./blogsPageComponent.module.css";
import NetworkNavbar from "@/components/common/Networks/NetworkNavbar";
import Image from "next/image";
import Link from "next/link";

const BlogsPageComponent = ({ blogs }) => {
   
  return (
    <div className={styles.container}>
      <header>
        <h1>YSL SERVICES</h1>
      </header>
      <div className={styles.gridContainer}>
        {blogs?.map((blog, i) => {
          return (
            <Link key={i} href={`/blogs/${blog.blogId}`}>
              <div className={styles.imageContainer}>
                <Image
                  fill
                  className={styles.image}
                  src={blog?.pic?.url}
                  alt="/blogimage"
                />
              </div>
              <div className={styles.textContainer}>
                <span style={{ color: "gray" }}>
                  <p>DATE: {blog?.date}</p>
                </span>
                <h3 style={{ margin: "10px 0", fontWeight: 100 }}>
                  {blog?.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
      <NetworkNavbar callUrl={"tel:+13472011312"} />
    </div>
  );
};

export default BlogsPageComponent;
