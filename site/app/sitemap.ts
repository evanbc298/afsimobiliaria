import type { MetadataRoute } from "next";
import { properties } from "@/lib/data/properties";
import { blogPosts } from "@/lib/data/blog-posts";

export const dynamic = "force-static";

const BASE_URL = "https://afsimobiliaria.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/itajai/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/balneario-camboriu/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contato/`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((property) => ({
    url: `${BASE_URL}/empreendimento/${property.slug}/`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...propertyRoutes, ...blogRoutes];
}
