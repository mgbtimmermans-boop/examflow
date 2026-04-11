import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/vak", "/agenda", "/herhalen", "/instellingen", "/biosync", "/rooster"],
    },
    sitemap: "https://examflow.nl/sitemap.xml",
  }
}
