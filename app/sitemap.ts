import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://achuth.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // {
    //   url: 'https://acme.com/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://blog.achuth.dev',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ];
}
