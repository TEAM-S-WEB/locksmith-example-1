import React from "react";
import styles from "./blogspage.module.css";
import BlogsPageComponent from "@/components/blogsComponent/BlogsPageComponent";
import GlobalApi from "@/utils/GlobalApi";

async function getAllBlogs() {
  const blogs = await GlobalApi.GetAllBlogs();
  return blogs;
}


export const revalidate = 60;

export const metadata = {
  title: `Blog locksmith info`,
  description:
    "Looking for a reliable locksmith? Our blog is your go-to resource for all things locks and security. From tips on choosing the right lock for your home to advice on what to do in case of a lockout, we've got you covered.",
  keywords:
    "locksmith, emergency locksmith, 24/7 locksmith, local locksmith, mobile locksmith, locksmith near me, locksmith services, residential locksmith, commercial locksmith, automotive locksmith, lock change, key replacement, lock repair, lock installation, safe opening, car lockout, house lockout, business lockout, lock picking, security systems, home security, business security, key cutting, lock rekeying, high-security locks, emergency lockouts, 24-hour locksmith service, affordable locksmith services, fast locksmith service, reliable locksmith service.",
  openGraph: {
    title: `Blog locksmith`,
    description: "Our locksmith blog offers a wealth of information on residential and commercial locksmith services. Learn about the latest security technologies, get expert advice on lock maintenance, and discover how to choose the right locksmith for your needs. We also provide helpful tips on preventing break-ins and protecting your property.",
    type: "article",
    locale: "en_US",
    url: `https://www.locksmithysl.com/blogs`,
    siteName: "YSL Services",
  },
};

const page = async () => {
    const blogs = await getAllBlogs();
    
  
  return (
    <div className={styles.container}>
      <BlogsPageComponent blogs={blogs}/>
    </div>
  );
};

export default page;
