import { GetAllBlogsByUser } from "@/services/apiBlogs";

export default async function sitemap() {
  const url = {
    home: "https://www.locksmithysl.com",

    blog: "https://www.locksmithysl.com/blogs",
  };

  async function getBlog() {
    const blogs = await GetAllBlogsByUser();
    // const blog = blogs?.filter((item) => item.blogId == id);
    return blogs.data;
  }

  const blogs = await getBlog();

  const blogsUrls = blogs.map((blog) => ({
    url: `https://www.locksmithysl.com/blog/${blog._id}`,
    lastModified: new Date(blog.date),
  }));

  return [
    {
      url: url.home,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },

    {
      url: url.blog,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },

    ...blogsUrls,
  ];
}
