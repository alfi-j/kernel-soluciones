import type { APIRoute } from "astro";
import config from "../../.astro/config.generated.json";

export const GET: APIRoute = async () => {
  const robotsConfig = config.seo?.robotsTxt;

  if (!robotsConfig?.enable) {
    return new Response("robots.txt disabled", { status: 404 });
  }

  const siteUrl = config.site?.baseUrl ?? "";
  const disallow: string[] = robotsConfig.disallow ?? [];

  const lines = ["User-agent: *"];
  if (disallow.length > 0) {
    for (const path of disallow) {
      lines.push(`Disallow: ${path}`);
    }
  } else {
    lines.push("Disallow:");
  }
  if (siteUrl) {
    lines.push(`Sitemap: ${siteUrl.replace(/\/$/, "")}/sitemap-index.xml`);
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
