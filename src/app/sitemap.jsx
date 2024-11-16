import GlobalApi from "@/utils/GlobalApi";

export default async function sitemap() {

    async function getBlog() {
        const blogs = await GlobalApi.GetAllBlogs();
        // const blog = blogs?.filter((item) => item.blogId == id);
        return blogs;
      }


      const blogs = await getBlog();

      const blogsUrls = blogs.map((blog)=>({
        url:`https://www.locksmithysl.com/blogs/${blog.id}`,
        lastModified: new Date(blog.date),
      }) )


    return [
      {
        url: 'https://www.locksmithysl.com/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.locksmithysl.com/blogs',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ...blogsUrls,
    ]
  }