import GlobalApi from "@/utils/GlobalApi";

export default async function sitemap() {
  async function getBlog() {
    const blogs = await GlobalApi.GetAllBlogs();
    // const blog = blogs?.filter((item) => item.blogId == id);
  
    return blogs;
  }

  const blogs = await getBlog();

  const blogsUrls = blogs.map((blog) => ({
    url: `https://www.locksmithysl.com/blogs/${blog.blogId}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://www.locksmithysl.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `https://www.locksmithysl.com/blogs/1`,
      lastModified: new Date(),
    },
    {
      url: `https://www.locksmithysl.com/blogs/2`,
      lastModified: new Date(),
    },
    {
      url: `https://www.locksmithysl.com/blogs/3`,
      lastModified: new Date(),
    },
  ];
}
