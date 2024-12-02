import GlobalApi from "@/utils/GlobalApi";

export default async function sitemap() {
  async function getBlog() {
    const blogs = await GlobalApi.GetAllBlogs();
    // const blog = blogs?.filter((item) => item.blogId == id);
    if (!blogs) {
      return [
        {
          id: "cm3h3x7o3o49707n3f6vepdpi",
          blogId: 1,
          keywords:
            "NYC locksmith, Manhattan locksmith, Brooklyn locksmith, 24/7 locksmith, emergency locksmith, lockouts, lock installation, security systems, fast locksmith, reliable locksmith",
          date: "2024-11-14",
          article:
            "Locksmiths in New York offer a wide range of services to cater to both residential and commercial clients. For homeowners, locksmiths can install high-security locks, rekey locks, and repair damaged doors. They can also install security systems, such as alarm systems and surveillance cameras, to protect your home from break-ins. Commercial clients can benefit from locksmith services such as master key systems, access control systems, and safe installation. Locksmiths can also provide emergency services for businesses, such as opening safes and replacing lost keys.",
          description:
            "Locked out? Need a fast and reliable locksmith in Manhattan or Brooklyn? This article will introduce you to the city's top locksmith services, including 24/7 emergency services, lock installation, and key replacement. Discover why we're the best choice for you.",
          subtitle: "24/7 Emergency Services",
          subparagraph:
            "New York City is a bustling metropolis that never sleeps. With such a fast-paced lifestyle, it's not uncommon to find yourself locked out of your home or business at the most inconvenient times. That's where 24/7 emergency locksmith services come in. These professionals are available around the clock to assist you with any lock-related issue. Whether you've lost your keys, your lock is jammed, or you need a new one installed, a locksmith can provide immediate assistance. The best locksmiths in the city are equipped with the latest tools and technology to handle any lock or security system, ensuring your safety and peace of mind.",
          title: "Locksmith Services in New York: Your Guide to Security",
          titleParagraph: "Choosing the Right Locksmith",
          pic: {
            url: "https://us-west-2.graphassets.com/cm3geavki05nt07n1byx1379n/cm3h3j7g2u6yt07n3r3gimjrn",
          },
        },
        {
          id: "cm3h48262o7tc07n3ng2prz41",
          blogId: 2,
          keywords:
            "NYC locksmith, Manhattan locksmith, Brooklyn locksmith, 24/7 locksmith, emergency locksmith, lockouts, lock installation, security systems, fast locksmith, reliable locksmith",
          date: "2024-11-14",
          article:
            "In the bustling metropolis of New York City, security is paramount. When you need a locksmith, you need someone you can trust. Our locksmith services are renowned for their reliability, efficiency, and commitment to customer satisfaction. With years of experience serving the New York area, we have built a solid reputation for providing top-notch security solutions.",
          description:
            "Locked out? Need a fast and reliable locksmith in Manhattan or Brooklyn? This article will introduce you to the city's top locksmith services, including 24/7 emergency services, lock installation, and key replacement. Discover why we're the best choice for you.",
          subtitle: "24/7 Emergency Services",
          subparagraph:
            " We understand that lockouts can happen at any time, day or night. That's why we offer round-the-clock emergency services to get you back into your home or business as quickly as possible.",
          title: "Locked Out? Your NYC Locksmith is Just a Call Away",
          titleParagraph: "Customer Satisfaction",
          pic: {
            url: "https://us-west-2.graphassets.com/cm3geavki05nt07n1byx1379n/cm3h444ejo6ht07n3c8exkfs6",
          },
        },
        {
          id: "cm3h4iu5dob6h07n396m0oibo",
          blogId: 3,
          keywords:
            "NYC locksmith, Manhattan locksmith, Brooklyn locksmith, 24/7 locksmith, emergency locksmith, lockouts, lock installation, security systems, fast locksmith, reliable locksmith",
          date: "2024-11-13",
          article:
            "Are you locked out of your home or office? Need a new lock installed? Or perhaps you're looking to upgrade your security system? Look no further! Our locksmith services in Manhattan and Brooklyn are here to provide you with the fastest, most reliable, and most professional locksmith services in the city.",
          description:
            "Locked out? Need a fast and reliable locksmith in Manhattan or Brooklyn? This article will introduce you to the city's top locksmith services, including 24/7 emergency services, lock installation, and key replacement. Discover why we're the best choice for you.",
          subtitle: "Unmatched Locksmith Services in Manhattan and Brooklyn",
          subparagraph:
            "We understand that lockouts and security concerns can be stressful. That’s why we offer 24/7 emergency services, ensuring that you're never left waiting. Our skilled technicians are equipped with the latest tools and technology to handle any lock or security issue, no matter how complex. Whether it's a simple lockout, a broken key, or a full-scale security system installation, we've got you covered.",
          title: "NYC’s Fastest Locksmith: Your Key to Security",
          titleParagraph: "Contact Us Today",
          pic: {
            url: "https://us-west-2.graphassets.com/cm3geavki05nt07n1byx1379n/cm3h4duhpugga07n3p0v9yvpe",
          },
        },
      ];
    }
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
    ...blogsUrls,
  ];
}
