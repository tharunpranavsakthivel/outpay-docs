import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { source } from "@/lib/source";

type ReviewedPageData = {
  last_reviewed?: string;
  status?: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source
    .getPages()
    .filter((page) => (page.data as ReviewedPageData).status !== "draft");

  return [
    ...pages.map((page) => {
      const data = page.data as ReviewedPageData;
      const lastModified = data.last_reviewed
        ? new Date(data.last_reviewed)
        : undefined;

      return {
        url: absoluteUrl(page.url),
        ...(lastModified && !Number.isNaN(lastModified.valueOf())
          ? { lastModified }
          : {}),
        changeFrequency: page.url.includes("/changelog") ? "monthly" : "yearly",
        priority:
          page.url === "/docs" ? 1 : page.url.endsWith("/index") ? 0.8 : 0.7,
      } satisfies MetadataRoute.Sitemap[number];
    }),
  ];
}
