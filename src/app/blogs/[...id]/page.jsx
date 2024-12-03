import React from "react";
import { Metadata } from "next";


import styles from "./blogpage.module.css";
import GlobalApi from "@/utils/GlobalApi";
import BlogsComponent from "@/components/blogsComponent/BlogByIdComponent";



async function getBlog(id) {
  const blogs = await GlobalApi.GetAllBlogs();
  const blog = blogs?.filter((item) => item.blogId == id);
  return blog[0];
}

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);
 
  if (!blog) {
    return;
  }

  return {
    title: `${blog?.title}`,
    description: blog?.description,
    keywords: blog?.keywords,
    openGraph: {
      title: blog?.title,
      description: blog?.description,
      type: "article",
      locale: "en_US",
      url: `https://www.locksmithysl.com/blogs/${id}`,
      siteName: "YSL Services",
      images: [
        {
          url: blog?.pic?.url,
          width: 1200,
          height: 250,
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;

  const blog = await getBlog(id);
  if (!blog) {
   return(
    <div>404 error</div>
   )
  }
  return <BlogsComponent blog={blog} />;
};

export default page;
