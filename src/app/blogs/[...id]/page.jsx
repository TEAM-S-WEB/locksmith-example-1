import React from "react";
import { Metadata } from "next";
import { VT323 } from "next/font/google";

import GlobalApi from "@/utils/GlobalApi";
import styles from "./blogpage.module.css";
import BlogsComponent from "@/components/blogsComponent/BlogsComponent";


const dateFont = VT323({ weight: "400", subsets: ["latin"] });

async function getBlog(id) {
  const blogs = await GlobalApi.GetAllBlogs();
  const blog = blogs?.filter((item) => item.blogId == id);
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
  return <BlogsComponent blog={blog[0]} />;
};

export default page;
